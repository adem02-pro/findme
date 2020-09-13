import { map, catchError } from 'rxjs/operators';
import { User } from './../model/user';
import { Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  authState: any = null;
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afu: AngularFireAuth,
              private asf: AngularFirestore) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth
    }));
    this.usersCollection = this.asf.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  registerWithUsername(username: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(username, password)
    .then((user) => {
      this.authState = user
      console.log(this.authState);
    })
    .catch(error => {
      console.log(error);
      throw error
    })
  }

  get registered(): boolean {
    return this.authState
  }

  addUserToCollection(user: User) {
    this.authState && (user.id = this.authState.user.uid);
    this.usersCollection.doc(user.id).set(user);
  }
}
