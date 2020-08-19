import { User } from './model/user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 1, firstname: "Ahmed", lastname: "DEM", age: 25, username: "lalodem", pwd: "adem", path: "assets/images/profile-img.JPG",
        reseaux: {
          facebook: {value: 'Facebook', reseau: ''},
          instagram: {value: 'Instagram', reseau: ''},
          mail: {value: 'Mail', reseau: ''},
          twitter: {value: 'Twitter', reseau: ''},
          snapchat: {value: 'Snapchat', reseau: ''},
          youtube: {value: 'Youtube', reseau: ''}
        }, description: ''
      },

      {id: 2, firstname: "Ibou", lastname: "DEM", age: 28, username: "bronx", pwd: "bronx",
        reseaux:  {
          facebook: {value: 'Facebook', reseau: ''},
          instagram: {value: 'Instagram', reseau: ''},
          mail: {value: 'Mail', reseau: ''},
          twitter: {value: 'Twitter', reseau: ''},
          snapchat: {value: 'Snapchat', reseau: ''},
          youtube: {value: 'Youtube', reseau: ''}
        }, description: ''
      },

      {id: 3, firstname: "Mariam", lastname: "BARRY", age: 18, username: "riam", pwd: "riam", path: "assets/images/profile-img4.JPG",
        reseaux:  {
          facebook: {value: 'Facebook', reseau: ''},
          instagram: {value: 'Instagram', reseau: ''},
          mail: {value: 'Mail', reseau: ''},
          twitter: {value: 'Twitter', reseau: ''},
          snapchat: {value: 'Snapchat', reseau: ''},
          youtube: {value: 'Youtube', reseau: ''}
        }, description: ''
      },

      {id: 4, firstname: "Almamy", lastname: "BARRY", age: 19, username: "mamy", pwd: "mamy",
        reseaux:  {
          facebook: {value: 'Facebook', reseau: ''},
          instagram: {value: 'Instagram', reseau: ''},
          mail: {value: 'Mail', reseau: ''},
          twitter: {value: 'Twitter', reseau: ''},
          snapchat: {value: 'Snapchat', reseau: ''},
          youtube: {value: 'Youtube', reseau: ''}
        }, description: ''
      },

      {id: 5, firstname: "Pauline", lastname: "Santa", age: 45, username: "popo", pwd: "popo",
        reseaux: {
          facebook: {value: 'Facebook', reseau: ''},
          instagram: {value: 'Instagram', reseau: ''},
          mail: {value: 'Mail', reseau: ''},
          twitter: {value: 'Twitter', reseau: ''},
          snapchat: {value: 'Snapchat', reseau: ''},
          youtube: {value: 'Youtube', reseau: ''}
        }, description: ''
      }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
}
