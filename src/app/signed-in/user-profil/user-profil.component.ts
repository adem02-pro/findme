import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  @Input() user: User;
  @Output() showUserProfil = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

  close() {
    this.showUserProfil.emit(false);
  }
}
