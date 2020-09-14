import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FindmeService } from '../services/findme.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: FindmeService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    if(this.service.authenticated) {return true};

    this.service.redirectUrl = url;

    return this.router.parseUrl('/connexion');
  }

}
