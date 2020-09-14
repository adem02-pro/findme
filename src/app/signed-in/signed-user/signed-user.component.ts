import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { FindmeService } from 'src/app/services/findme.service';

@Component({
  selector: 'app-signed-user',
  templateUrl: './signed-user.component.html',
  styleUrls: ['./signed-user.component.css']
})
export class SignedUserComponent implements OnInit {

  connectedUser$: Observable<User>

  constructor(private service: FindmeService) {}

  ngOnInit(): void {
    this.connectedUser$ = this.service.authenticatedUserData();
  }

}
