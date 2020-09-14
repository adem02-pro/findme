import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindmeService } from '../services/findme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: FindmeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logOut()
    .then(() => {
      this.router.navigate([this.service.redirectUrl])
    })
  }
}
