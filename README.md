# ionic2withFirebase
followed a couple tutorials to come up with a quick ionic 2 setup with firebase - just update the firebase config in app.module.ts

tutorial 1:
https://www.joshmorony.com/building-a-crud-ionic-2-application-with-firebase-angularfire/

Important bits:

Setup Ionic and init the project - grab dependencies:

npm install -g ionic cordova typescript

ionic start PROEJCT_NAME blank --v2

npm install @ionic/app-scripts@latest --save-dev

npm install angularfire2 --save

*One important thing the author neglects is the new firebase authentication rules for accessing the database. Be sure to update the json config in the firebase console to allow users to read/write. If you don't do this, and didn't set up an authentication method, you'd be blocked from doing any CRUD operation. I changed my rules so anyone could read, but only authenticated user could write.

tutorial 2:
https://javebratt.com/angularfire2-authentication-ionic/

Important bits:

Only implemented the login page itself (no registration or forgotten password stuff) - created the user directly in the firebase console.

Had to make a few updates because the versioning was a bit different - mainly database import statement is little different, maybe a couple things around the Auth provider too.

