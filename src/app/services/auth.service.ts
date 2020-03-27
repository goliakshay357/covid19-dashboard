import { Injectable, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from './../config/config'

@Injectable()
export class AuthService implements OnInit {
  headers: HttpHeaders;
  options: any;
  constructor(
    // private afAuth: AngularFireAuth,
    private _http: HttpClient,
    private http: Http,
    private router: Router) { }
  ngOnInit() { }

  logout() {
    // this.afAuth.auth.signOut();
    localStorage.clear();
    window.localStorage.clear();
  }
  //////////////
  // Enable if u want firebase ///
  //////////////

  //   doFacebookLogin() {
  //       return new Promise<any>((resolve, reject) => {
  //           let provider = new firebase.auth.FacebookAuthProvider();
  //           this.afAuth.auth
  //               .signInWithPopup(provider)
  //               .then(res => {
  //                   resolve(res);
  //               }, err => {
  //                   console.log(err);
  //                   reject(err);
  //               })
  //       })
  //   }

  //   doGoogleLogin() {
  //       return new Promise<any>((resolve, reject) => {
  //           let provider = new firebase.auth.GoogleAuthProvider();
  //           this.afAuth.auth
  //               .signInWithPopup(provider)
  //               .then(res => {
  //                   resolve(res);
  //               }, err => {
  //                   console.log(err);
  //                   reject(err);
  //               })
  //       })
  //   }



  // signupWithEmailAndPassword(data) {
  //   let _that = this
  //   let response = this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password).then(function (res) {

  //     window.localStorage.setItem("user_name", data.first_name + " " + data.last_name);
  //     window.localStorage.setItem('email', data.email)
  //     window.localStorage.setItem("uid", res.user.uid);

  //     if (res.user) {

  //       _that.afAuth.authState.subscribe((auth) => {
  //         auth.updateProfile({
  //           displayName: data.first_name + " " + data.last_name,
  //           photoURL: "photourl",
  //         })
  //       })

  //       firebase.auth().currentUser.getIdToken().then(function (idToken) {
  //         window.localStorage.setItem("fb_jwt", idToken)         
  //       }).catch(function (error) {
  //         console.log(error, " errr");
  //       });

  //       return {
  //         success: true,
  //         message: ""
  //       }
  //     }
  //   }).catch(err => {
  //     console.log(err);

  //     return {
  //       success: false,
  //       message: err.message
  //     }
  //   });

  //   return response;
  // }


  // signInWithEmail(data) {
  //   let _th = this
  //   let res = this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password).then(res => {
  //     console.log('login successfull', res)

  //     window.localStorage.setItem("uid", res.user.uid)

  //    _th.afAuth.authState.subscribe((auth) => {
  //       if (auth != null) {
  //         window.localStorage.setItem("uid", auth.uid)
  //         window.localStorage.setItem('userEmail', auth.email)
  //         window.localStorage.setItem("user_name", auth.displayName);
  //       }

  //       firebase.auth().currentUser.getIdToken().then(function (idToken) {
  //         window.localStorage.setItem("fb_jwt", idToken)

  //         window.location.href = 'home'

  //       }).catch(function (error) {
  //         console.log(error, " errr");
  //       });


  //     })

  //     window.localStorage.setItem("uid", res.user.uid)
  //     return {
  //       success: true,
  //       message: "Logged In , Success!",
  //       uid: res.user.uid
  //     };




  //   }, function (err) {
  //     console.log('failed', err);
  //     return {
  //       success: false,
  //       message: err.message
  //     };
  //   })
  //   console.log(res, "final res");

  //   return res;

  // }


  // forgotPassword(passwordResetEmail) {
  //   let response;
  //   this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(res => {
  //     console.log(res, "res");
  //     window.alert('Password reset email sent, check your inbox.');
  //     response = res
  //     window.location.href = "login"
  //   }).catch(err => {
  //     console.log(err, "err");
  //     window.alert(err.message)
  //   })

  //   return response;
  // }

}