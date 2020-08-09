import { User } from './../../model/user';
import { LogInService } from './../../services/log-in.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  users: User[];

  form = this.fb.group ({
    username: ['', Validators.required],
    pwd: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private logService: LogInService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.logService.getUsers().subscribe(
      data => this.users = data
    );
  }

  login(){
    this.logService.login(this.users, this.username.value, this.pwd.value).subscribe(
      () => {
        if(this.logService.isLoggedIn) this.router.navigate([this.logService.redirectUrl]);
      }
    )
  }

  get username() {return this.form.get('username')}
  get pwd() {return this.form.get('pwd')}
}
