 import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, delay } from 'rxjs/operators';
import { Observable, pipe, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private url = 'api/users';
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
                .pipe(
                  tap(_ => console.log('Users fetched!'),
                  catchError(err => of('Error'))
                  )
                );
  }

  getUser(id: number): Observable<User> {
    const url = this.url + '/' + id;
    return this.http.get<User>(url).pipe(
      catchError(err => {
        console.log("Une erreur est survenue lors de la recupération de l'utilisateur: " + id);
        return of(err)
      })
    )
  }

  login(users:User[], usr: string, pwd: string): Observable<boolean> {
    if(this.verifyUer(users, usr, pwd)) {
      return of(true).pipe(
        delay(2000),
        tap(bool => {
          this.redirectUrl = '/profil'
          this.isLoggedIn = bool})
      )
    }
    else return of(false)
  }

  logout(): Observable<boolean> {
    return of(false).pipe(
      delay(500),
      tap(bool => {
        this.isLoggedIn = false;
      })
    )
  }

  verifyUer(users: User[], usr:string, pwd:string): boolean{
    const yUser = (user: User) => user.username === usr && user.pwd === pwd;
    return users.some(yUser);
  }
}