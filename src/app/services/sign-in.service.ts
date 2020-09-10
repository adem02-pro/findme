import { LogInService } from './log-in.service';
import { InMemoryDataService } from './../in-memory-data.service';
import { map, catchError } from 'rxjs/operators';
import { User } from './../model/user';
import { Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private url: string = 'api/users';
  authState: any = null

  constructor(private http: HttpClient,
              private dataService: InMemoryDataService,
              private authentifiedUsers: LogInService,
              private afu: AngularFireAuth) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth
    }))
  }

  registerWithUsername(username: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(username, password)
    .then((user) => {
      this.authState = user
    })
    .catch(error => {
      console.log(error);
      throw error
    })
  }

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
