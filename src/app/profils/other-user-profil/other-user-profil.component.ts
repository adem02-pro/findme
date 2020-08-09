import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-user-profil',
  templateUrl: './other-user-profil.component.html',
  styleUrls: ['./other-user-profil.component.css']
})
export class OtherUserProfilComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
