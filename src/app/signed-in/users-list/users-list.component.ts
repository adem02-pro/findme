import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { LogInService } from 'src/app/services/log-in.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  search = new FormControl('', Validators.required);
  users: User[] = [];
  loadingMode: boolean = false;
  @Output() emitUser = new EventEmitter<User>();
  @Output() showUserProfil = new EventEmitter<boolean>();

  constructor(private usersService: LogInService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loadingMode = true;
    this.usersService.getUsers().subscribe(
      (data) => this.users = data,
      (err) => console.log(err),
      () => this.loadingMode = false
    )
  }

  onSelect(user: User) {
    this.emitUser.emit(user);
    this.showUserProfil.emit(true);
  }

}
