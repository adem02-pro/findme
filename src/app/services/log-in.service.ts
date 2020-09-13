 import { User } from './../model/user';
import {  switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>

  redirectUrl: string;
  connectedUser$: Observable<User>;

  authState: any = null

  constructor(private afu: AngularFireAuth,
              private asf: AngularFirestore) {
                this.isLoggedIn$ = this.afu.authState.pipe(map(user => !!user));
                this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    this.connectedUser$ = this.afu.authState.pipe(
      switchMap(user => {
        if(user) return this.asf.doc<User>(`users/${user.uid}`).valueChanges();
        else return of(null);
      })
    )

    this.afu.authState.subscribe(auth => this.authState = auth)
  }

  getFireUsers() {
    return this.asf.collection<User>('users').valueChanges();
  }

  get authenticated(): boolean {
    return this.authState
  }

  loginWithEmail(email: string, password: string) {
    return this.afu.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.redirectUrl = '/profil'
    })
    .catch(error => {
      console.log(error);
      throw error
    })
  }
}
