import { User } from './../../model/user';
import { LogInService } from './../../services/log-in.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[];
  selectedUser: User;

  constructor(private route: ActivatedRoute,
              private usersService: LogInService,
              private router: Router,
              private userService: LogInService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id !== 0) {
      this.userService.getUser(id)
        .subscribe(user => {
          this.selectedUser = user
        } 
      );
    }
  }

  emittedUser(user: User) {
    this.selectedUser = user;
  }
}
