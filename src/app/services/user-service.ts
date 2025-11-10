import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  buscarUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
  }
}
