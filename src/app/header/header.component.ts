import { LogInService } from './../services/log-in.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public logService: LogInService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.logService.logout().subscribe(
      () => {
        if(!this.logService.isLoggedIn) this.router.navigate([this.logService.redirectUrl]);
      } 
    )
     
  }
}
