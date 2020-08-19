import { element } from 'protractor';
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
  reseauxTab: {value: string, reseau: string}[];

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
    ],
    reseau: [''],
    reseauInput: ['']
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
  get reseau() { return this.formulaire.get('reseau')};
  get reseauInput() { return this.formulaire.get('reseauInput')};

  signInUser() {}


  addReseau() {
    if (this.reseau.value && this.reseauInput.value)
    {
      const indexFound = (element: {value: string, reseau: string}) => element.value === this.reseau.value
      let i = this.reseauxTab.findIndex(indexFound);
      this.reseauxTab[i].reseau = this.reseauInput.value;
    }
  }
}
// <i class="fab fa-facebook-square"></i>
// <i class="fab fa-instagram-square"></i>
// <i class="fas fa-envelope-square"></i>
// <i class="fab fa-snapchat-square"></i>
// <i class="fab fa-twitter-square"></i>
// <i class="fab fa-youtube-square"></i>
