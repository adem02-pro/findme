import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { User } from './../model/user';
import { Observable, of, pipe } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FindmeService {

  private authState: any = null;

  private usersCollection: AngularFirestoreCollection<User>;

  users: Observable<User[]>;

  redirectUrl: string;

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>

  connectedUser$: Observable<User>;

constructor(private afu: AngularFireAuth,
            private afs: AngularFirestore)
{
  this.isLoggedIn$ = this.afu.authState.pipe(map(user => !!user));
  this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

  this.afu.authState.subscribe(auth => this.authState = auth);

  this.usersCollection = this.afs.collection<User>('users')
}

  // From Login Service
  getFireUsers() {
    return this.afs.collection<User>('users').valueChanges();
  }

  authenticatedUserData(): Observable<User> {
    return this.afu.authState.pipe(
      switchMap(user => {
        if(user) return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        else return of(null);
      })
    )
  }

  get authenticated(): boolean {
    return this.authState
  }

  loginWithEmail(email: string, password: string) {
    return this.afu.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user
      this.redirectUrl = 'profil'
    })
    .catch(error => {
      console.log(error);
      throw error
    })
  }

  logOut() {
    return this.afu.signOut()
    .then(() => {
      this.redirectUrl = 'cover';
    })
  }
  // End of Login methods


  // From sign In service
  registerWithUsername(username: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(username, password)
    .then((user) => {
      this.authState = user
      this.redirectUrl = 'connexion'
    })
    .catch(error => {
      console.log(error);
      throw error
    })
  }

  addUserToCollection(user: User) {
    this.authState && (user.id = this.authState.user.uid);
    this.usersCollection.doc(user.id).set(user)
  }
  // End of sign In methods
}
