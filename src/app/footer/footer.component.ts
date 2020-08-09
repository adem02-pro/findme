import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formulaire = this.fb.group({
    email: ['', [Validators.required]],
    message: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  send() {
    
  }

  get email() {return this.formulaire.get('email')}
  get message() {return this.formulaire.get('message')}
}
