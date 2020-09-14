import { Component, OnInit } from '@angular/core';
import { FindmeService } from '../services/findme.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  isLoggedIn$ = this.service.isLoggedIn$
  isLoggedOut$ = this.service.isLoggedOut$

  constructor(public service: FindmeService) { }

  ngOnInit(): void {
  }

}
