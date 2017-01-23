import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';


@Injectable()
export class ProfileService {
  currentUser: User = {
    _id: '0',
    name: 'Jack'
  };

  updateProfile(name: string): Observable<string> {
    this.currentUser.name = name;

    return Observable.of(name);
  }

  constructor() { }

}
