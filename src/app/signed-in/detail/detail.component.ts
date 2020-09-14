import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

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
    reseauInput: [''],
    description: ['', [Validators.maxLength(300)]]
  })

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    // this.user = this.logService.connectedUser;
    // this.setInfoValues();
    // this.reseauxTab = this.updateService.reseauxToTab(this.user);
    // console.log(this.reseauxTab);
  }

  // setInfoValues() {
  //   this.formulaire.patchValue({
  //     firstname: this.user.firstname,
  //     lastname: this.user.lastname,
  //     age: this.user.age,
  //     username: this.user.username,
  //     password: this.user.pwd
  //   })
  // }

  // addReseau() {
  //   if (this.reseau.value && this.reseauInput.value)
  //   {
  //     const indexFound = (element: {value: string, reseau: string}) => element.value === this.reseau.value
  //     let i = this.reseauxTab.findIndex(indexFound);
  //     this.reseauxTab[i].reseau = this.reseauInput.value;
  //   }
  //   this.reseauInput.reset();
  // }

  // removeReseau(reseau: {value: string, reseau: string}) {
  //   const indexFound = (element: {value: string, reseau: string}) => element.value === reseau.value && element.reseau === reseau.reseau;
  //   let i = this.reseauxTab.findIndex(indexFound);
  //   this.reseauxTab[i].reseau = '';
  // }

  // synchronizeData() {
  //   let user = this.logService.connectedUser;
  //   let reseaux = user.reseaux;
  //   user.firstname = this.firstname.value;
  //   user.lastname = this.lastname.value;
  //   user.age = this.age.value;
  //   user.pwd = this.password.value;
  //   user.description = this.description.value;

  //   reseaux.facebook = this.fillReseaux(reseaux.facebook.value);
  //   reseaux.instagram = this.fillReseaux(reseaux.instagram.value);
  //   reseaux.mail = this.fillReseaux(reseaux.mail.value);
  //   reseaux.twitter = this.fillReseaux(reseaux.twitter.value);
  //   reseaux.snapchat = this.fillReseaux(reseaux.snapchat.value);
  //   reseaux.youtube = this.fillReseaux(reseaux.youtube.value);
  // }

  // fillReseaux(reseau: string): {value: string, reseau: string} {
  //   const found = (element: {value: string, reseau: string}) => element.value === reseau;
  //   return this.reseauxTab.find(found);
  // }

  updateUser() {
    // this.synchronizeData();
    // let user: User = this.logService.connectedUser;
    // this.updateService.updateUser(user)
    //                   .subscribe(
    //                     data => {
    //                       if(data) this.router.navigate([url]);
    //                     }
    //                   )
    let url = '/profil';

  }

  get firstname() { return this.formulaire.get('firstname')};
  get lastname() { return this.formulaire.get('lastname')};
  get age() { return this.formulaire.get('age')};
  get username() { return this.formulaire.get('username')};
  get password() { return this.formulaire.get('password')};
  get reseau() { return this.formulaire.get('reseau')};
  get reseauInput() { return this.formulaire.get('reseauInput')};
  get description() { return this.formulaire.get('description')};
}
