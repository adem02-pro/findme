import { LogInService } from 'src/app/services/log-in.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Reseaux } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  private url = 'api/users';

  constructor(private http: HttpClient,
              private logService: LogInService) { }

  reseauxToTab(user: User): any[]{
    let userReseaux = user.reseaux;
    let tab = [];
    for (let key in userReseaux) {
      if (userReseaux.hasOwnProperty(key)) {
        tab.push(userReseaux[key])
      }
    }
    return tab;
  }
}
