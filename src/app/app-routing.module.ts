import { ErrorComponentComponent } from './error-component/error-component.component';
import { ConnexionComponent } from './signIn/connexion/connexion.component';
import { InscriptionComponent } from './signIn/inscription/inscription.component';
import { CoverComponent } from './cover/cover.component';
import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './signed-in/profil/profil.component';
import { DetailComponent } from './signed-in/detail/detail.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['connexion'])
const redirectLoggedInToProfil = () => redirectLoggedInTo(['profil']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cover',
    pathMatch: 'full'},
  {
    path: 'cover',
    component: CoverComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToProfil}
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToProfil}
  },
  {
    path: 'profil',
    component: ProfilComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
