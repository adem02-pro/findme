import { LogInService } from './../../services/log-in.service';
import { User } from './../../model/user';
import { SignInService } from './../../services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  usrNameValide: boolean = true;

  formulaire = this.fb.group ({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', [Validators.required,
               Validators.min(18),
               Validators.max(120)]
    ],
    username: ['', [Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(30)]
    ],
    password: ['', [Validators.required,
                    Validators.minLength(8)]
    ]
  })

  constructor(private fb: FormBuilder,
              private inscriptionService: SignInService,
              private auth: LogInService,
              private router: Router
             ) { }

  ngOnInit(): void {
    this.isUsrValid();
  }

  signInUser() {
    let user: User = {
      firstname: this.formulaire.value.firstname,
      lastname: this.formulaire.value.lastname, age: this.formulaire.value.age,
      username: this.formulaire.value.username, pwd: this.formulaire.value.password,
      reseaux: {
        facebook: {value: 'Facebook', reseau: ''},
        instagram: {value: 'Instagram', reseau: ''},
        mail: {value: 'Mail', reseau: ''},
        twitter: {value: 'Twitter', reseau: ''},
        snapchat: {value: 'Snap', reseau: ''},
        youtube: {value: 'Youtube', reseau: ''}
      },
      description: ''
    }
    this.inscriptionService.createUser(user).subscribe(userCreated => {
      if (userCreated) {
        this.auth.getUsers().subscribe()};
    });
    this.formulaire.reset();
    this.router.navigate(['/connexion']);
  }

  isUsrValid() {
    this.username.valueChanges
    .pipe(debounceTime(150))
    .subscribe(
      (usr) => {
        this.inscriptionService.verifyUsrNameValidity(usr)
        .subscribe(data => this.usrNameValide = data)
      }
    )
  }


  get firstname() { return this.formulaire.get('firstname')};
  get lastname() { return this.formulaire.get('lastname')};
  get age() { return this.formulaire.get('age')};
  get username() { return this.formulaire.get('username')};
  get password() { return this.formulaire.get('password')};
}
