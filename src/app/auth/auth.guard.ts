import { LogInService } from './../services/log-in.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from '../services/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: LogInService, private signService: SignInService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    if(this.authService.authenticated || this.signService.registered) {return true};

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/connexion');
  }

}
