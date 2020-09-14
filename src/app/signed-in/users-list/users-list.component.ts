import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  search = new FormControl('', Validators.required);
  @Input() users: Observable<User[]>;
  loadingMode: boolean = false;
  @Output() showUserProfil = new EventEmitter<boolean>();
  @Output() selectedUser = new EventEmitter<User>()


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User) {
    this.showUserProfil.emit(true);
    this.selectedUser.emit(user);
  }

}
