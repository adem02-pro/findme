import { LogInService } from 'src/app/services/log-in.service';
import { Component, OnInit, Input } from '@angular/core';
import { User, Reseaux } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-signed-user',
  templateUrl: './signed-user.component.html',
  styleUrls: ['./signed-user.component.css']
})
export class SignedUserComponent implements OnInit {

  connectedUser$: Observable<User>
  userReseaux: Reseaux;
  reseauxTab: any[]
  userDoc: AngularFirestoreDocument<User>

  constructor(private logService: LogInService) {

  }

  ngOnInit(): void {
    this.connectedUser$ = this.logService.connectedUser$
  }

}
