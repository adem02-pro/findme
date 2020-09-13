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
  loadWhenConnected: boolean = false;

  form = this.fb.group ({
    username: ['', Validators.required],
    pwd: ['', Validators.required]
  })

  error: {name: string, message: string} = {name: '', message: ''}

  constructor(private fb: FormBuilder,
              private logService: LogInService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(){
    this.loadWhenConnected = true;

    this.logService.loginWithEmail(this.username.value, this.pwd.value)
    .then(() => {
      this.form.reset();
      this.router.navigate([this.logService.redirectUrl]);
      this.loadWhenConnected = false
    })
    .catch(error => {
      console.log(error);
      this.form.reset();
    })
  }

  get username() {return this.form.get('username')}
  get pwd() {return this.form.get('pwd')}
}
