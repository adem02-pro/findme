import { User } from './../../model/user';
import { SignInService } from './../../services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  error: {name: string, message: string} = {name: '', message: ''}

  formulaire = this.fb.group ({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', [Validators.required,
               Validators.min(18),
               Validators.max(150)]
    ],
    email: ['', Validators.required],
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
              private router: Router
             ) {
  }

  ngOnInit(): void {
  }

  register() {
    let user: User = {
      firstname: this.firstname.value, email: this.email.value,
      lastname: this.lastname.value, age: this.age.value,
      username: this.username.value, pwd: this.password.value,
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

    return user
  }

  signInUser() {
    let user = this.register();
    this.inscriptionService.registerWithUsername(this.email.value, this.password.value)
    .then(() => {
      this.formulaire.reset();
      this.router.navigate(['/profil']);
    })
    .then(() => {
      this.inscriptionService.addUserToCollection(user);
    })
    .catch(error => {
      this.error = error;
      this.formulaire.reset();
    })
  }

  get firstname() { return this.formulaire.get('firstname')};
  get lastname() { return this.formulaire.get('lastname')};
  get age() { return this.formulaire.get('age')};
  get username() { return this.formulaire.get('username')};
  get password() { return this.formulaire.get('password')};
  get email() { return this.formulaire.get('email')};
}
