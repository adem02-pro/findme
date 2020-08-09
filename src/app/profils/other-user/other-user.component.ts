import { LogInService } from './../../services/log-in.service';
import { User } from './../../model/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.component.html',
  styleUrls: ['./other-user.component.css']
})
export class OtherUserComponent implements OnInit {

  search = new FormControl('', Validators.required);
  users: User[] = [];
  @Output() emitUser = new EventEmitter<User>();

  constructor(private usersService: LogInService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (data) => this.users = data
    )    
  }

  onSelect(user: User) {
    this.emitUser.emit(user);
  }
}