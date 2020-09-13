import { LogInService } from 'src/app/services/log-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  isLoggedIn$ = this.logService.isLoggedIn$
  isLoggedOut$ = this.logService.isLoggedOut$

  constructor(public logService: LogInService) { }

  ngOnInit(): void {
  }

}
