import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(["admin1/list"]);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async doFacebookLogin(email: string, password: string) {
    try {
      let provider = new firebase.auth.FacebookAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
      this.router.navigate(["admin1/list"]);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async doTwitterLogin(email: string, password: string) {
    try {
      let provider = new firebase.auth.TwitterAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
      this.router.navigate(["admin1/list"]);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async doGoogleLogin(email: string, password: string) {
    try {
      let provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);
      this.router.navigate(["admin1/list"]);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem("user");
    this.router.navigate(["admin1/login"]);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }
}
