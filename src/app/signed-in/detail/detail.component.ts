import { UpdateServiceService } from './../../services/update-service.service';
import { LogInService } from 'src/app/services/log-in.service';
import { SignInService } from './../../services/sign-in.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { User, Reseaux } from 'src/app/model/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  usrNameValide: boolean = true;
  user: User;
  reseauxTab: any[];

  formulaire = this.fb.group ({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', [Validators.required,
               Validators.min(18),
               Validators.max(120)]
    ],
    username: [{value: '', disabled: true},
                    [Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(30)]
    ],
    password: ['', [Validators.required,
                    Validators.minLength(8)]
    ]
  })

  constructor(private fb: FormBuilder,
              private inscriptionService: SignInService,
              private logService: LogInService,
              private updateService: UpdateServiceService) { }

  ngOnInit(): void {
    this.user = this.logService.connectedUser;
    this.setInfoValues();
    this.reseauxTab = this.updateService.reseauxToTab(this.user);
    console.log(this.reseauxTab);
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

  setInfoValues() {
    this.formulaire.patchValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      age: this.user.age,
      username: this.user.username,
      password: this.user.pwd
    })
  }

  get firstname() { return this.formulaire.get('firstname')};
  get lastname() { return this.formulaire.get('lastname')};
  get age() { return this.formulaire.get('age')};
  get username() { return this.formulaire.get('username')};
  get password() { return this.formulaire.get('password')};

  signInUser() {}

}
