import { LogInService } from 'src/app/services/log-in.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  url: string;
  linkName: string
  constructor(private logService: LogInService) { }

  ngOnInit(): void {
    this.url = this.logService.isLoggedIn ? "/profil" : "/connexion";
    this.linkName = this.logService.isLoggedIn ? "profil" : "commencer"
  }
  

}
