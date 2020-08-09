import { ErrorComponentComponent } from './error-component/error-component.component';
import { UsersComponent } from './profils/users/users.component';
import { ConnexionComponent } from './signIn/connexion/connexion.component';
import { InscriptionComponent } from './signIn/inscription/inscription.component';
import { CoverComponent } from './cover/cover.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/cover', pathMatch: 'full'},
  {path: 'cover', component: CoverComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'profil', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'profil/:id', component: UsersComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
