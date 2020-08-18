import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { SignedUserComponent } from './signed-user/signed-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ProfilComponent,
    SignedUserComponent,
    UsersListComponent,
    UserProfilComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfilModule { }
