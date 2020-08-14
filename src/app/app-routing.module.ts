import { ErrorComponentComponent } from './error-component/error-component.component';
import { ConnexionComponent } from './signIn/connexion/connexion.component';
import { InscriptionComponent } from './signIn/inscription/inscription.component';
import { CoverComponent } from './cover/cover.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/cover', pathMatch: 'full'},
  {path: 'cover', component: CoverComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
