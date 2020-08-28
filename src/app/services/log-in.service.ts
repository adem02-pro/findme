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
  connectedUser: User;

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
                .pipe(
                  delay(1000),
                  tap(_ => console.log('Users fetched!'),
                  catchError(err => of('Error'))
                  )
                );
  }

  getUser(id: number | string): Observable<User> {
    const url = this.url + '/' + id;
    return this.http.get<User>(url).pipe(
      catchError(err => {
        console.log("Une erreur est survenue lors de la recupération de l'utilisateur: " + id);
        return of(err)
      })
    )
  }

  login(users:User[], usr: string, pwd: string): Observable<boolean> {
    if(this.connectedUser = this.verifyUer(users, usr, pwd)) {
      return of(true).pipe(
        delay(2000),
        tap(bool => {
          this.redirectUrl = '/profil'
          this.isLoggedIn = true;
        })
      )
    }
    else return of(false)
  }

  logout(): Observable<boolean> {
    return of(false).pipe(
      delay(500),
      tap(bool => {
        this.isLoggedIn = false;
        this.redirectUrl = '/connexion';
      })
    )
  }

  verifyUer(users: User[], usr:string, pwd:string): User{
    const yUser = (user: User) => user.username === usr && user.pwd === pwd;
    return users.find(yUser);
  }
}
