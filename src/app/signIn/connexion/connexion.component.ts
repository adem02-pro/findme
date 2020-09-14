import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindmeService } from 'src/app/services/findme.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loadWhenConnected: boolean = false;

  form = this.fb.group ({
    email: ['', Validators.required],
    pwd: ['', Validators.required]
  })

  auth: any

  error: {name: string, message: string} = {name: '', message: ''}

  constructor(private fb: FormBuilder,
              private service: FindmeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(){
    this.loadWhenConnected = true
    this.service.loginWithEmail(this.email.value, this.pwd.value)
    .then(() => {
      this.router.navigate([this.service.redirectUrl])
      this.form.reset();
      console.log(this.service.redirectUrl);
    })
    .catch(error => {
      console.log(error);
      this.form.reset();
    })
    this.auth = this.service.authenticated
  }

  get email() {return this.form.get('email')}
  get pwd() {return this.form.get('pwd')}
}
