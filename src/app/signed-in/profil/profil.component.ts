import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';
import { LogInService } from 'src/app/services/log-in.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userProfilShown: boolean = false;
  selectedUser: User
  usersCollection: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;

  constructor(private logService: LogInService, private afu: AngularFireAuth, private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.usersCollection = this.afs.collection<User>('users');
    this.users$ = this.usersCollection.valueChanges();
  }

  emittedClose(bool: boolean) {
    this.userProfilShown = bool;
  }

  showUser(show: boolean) {
    this.userProfilShown = show;
  }

  selectUser(user: User) {
    this.selectedUser = user
  }
}
