import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  async getUserData(): Promise<User[]> {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await result.json();

    return data;
  }
}
