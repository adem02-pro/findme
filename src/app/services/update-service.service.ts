import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LogInService } from 'src/app/services/log-in.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  private url = 'api/users';

  constructor(private http: HttpClient,
              private logService: LogInService) { }

  // reseauxToTab(user: User): {value: string, reseau: string}[]{
  //   let userReseaux = user.reseaux;
  //   let tab: {value: string, reseau: string}[] = [];
  //   for (let key in userReseaux) {
  //     if (userReseaux.hasOwnProperty(key)) {
  //       tab.push(userReseaux[key])
  //     }
  //   }
  //   return tab;
  // }

  // updateUser(user: User): Observable<boolean> {
  //     return this.http.put<User>(this.url + '/' + user.id, user)
  //     .pipe(
  //       map((response) => true),
  //       catchError(err =>{
  //         console.log(err);
  //         return of(false)
  //       })
  //     )
  // }
}
