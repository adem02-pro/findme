import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { FindmeService } from '../../services/findme.service'


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userProfilShown: boolean = false;
  selectedUser: User
  users$: Observable<User[]>;

  constructor(private service: FindmeService) {}

  ngOnInit(): void {
    this.users$ = this.service.getFireUsers();
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
