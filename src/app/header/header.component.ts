import { LogInService } from './../services/log-in.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public logService: LogInService,
              private router: Router,
              private afu: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout() {
    this.afu.signOut()
    .then(() => {
      this.router.navigate(['cover'])
    })
  }
}
