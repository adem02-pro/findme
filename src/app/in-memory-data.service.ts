import { User } from './model/user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 1, firstname: "Ahmed", lastname: "DEM", age: 25, username: "lalodem", pwd: "adem", path: "assets/images/profile-img.JPG"},
      {id: 2, firstname: "Ibou", lastname: "DEM", age: 28, username: "bronx", pwd: "bronx"},
      {id: 3, firstname: "Mariam", lastname: "BARRY", age: 18, username: "riam", pwd: "riam", path: "assets/images/profile-img4.JPG"},
      {id: 4, firstname: "Almamy", lastname: "BARRY", age: 19, username: "mamy", pwd: "mamy"},
      {id: 5, firstname: "Pauline", lastname: "Santa", age: 45, username: "popo", pwd: "popo"}
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}