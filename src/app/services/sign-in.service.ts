import { LogInService } from './log-in.service';
import { InMemoryDataService } from './../in-memory-data.service';
import { map, catchError } from 'rxjs/operators';
import { User } from './../model/user';
import { Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private url: string = 'api/users';

  constructor(private http: HttpClient,
              private dataService: InMemoryDataService,
              private authentifiedUsers: LogInService ) { }

  createUser(user: User): Observable<boolean> {
    return this.http.post<User>(this.url, user).pipe(
      map(resp => true),
      catchError(err => {
        console.log("Une erreur est survenue lors de lacreation d'un nouveau héro!");
        return of(err)
      })
    )
  }

  verifyUsrNameValidity(usrName: string): Observable<boolean> {
    const sameUsername = (user: User) => usrName !== user.username;
    return this.authentifiedUsers.getUsers().pipe(
      map( data => data.every(sameUsername)),
      catchError(err => {
        console.log(err);
        return of(false);
      })
    );
  }
}