import { DetailComponent } from './detail/detail.component';
import { ProfilComponent } from './profil/profil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../auth/auth.guard'


const routes: Routes = [
  {path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard]}
];

// canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
