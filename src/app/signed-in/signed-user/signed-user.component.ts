import { LogInService } from 'src/app/services/log-in.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signed-user',
  templateUrl: './signed-user.component.html',
  styleUrls: ['./signed-user.component.css']
})
export class SignedUserComponent implements OnInit {
  
  connectedUser: User;
  
  constructor(private logService: LogInService) { }

  ngOnInit(): void {
    this.connectedUser = this.logService.connectedUser;
  }

}
