import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User;

  constructor(
    public afAuth: AngularFireAuth) {
    this.authState = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
    });
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  signInWithEmail(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return '';
    }
  }
}
