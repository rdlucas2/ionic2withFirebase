import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]

})
export class Login {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _auth: AuthService) {
  }

  email: string;
  password: string;

  login() {
    this._auth.signInWithEmail(this.email, this.password)
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth.displayName());
    this.navCtrl.pop();
  }  

}
