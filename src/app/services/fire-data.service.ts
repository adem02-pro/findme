import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FireDataService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private asf: AngularFirestore) {
    this.usersCollection = asf.collection<User>('users')
    this.users = this.usersCollection.valueChanges();
  }

}
