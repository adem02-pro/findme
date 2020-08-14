import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  users: User[];
  selectedUser: User;

  constructor(private logService: LogInService) { }

  ngOnInit(): void {}

  emittedUser(user: User) {
    this.selectedUser = user;
  }
}
