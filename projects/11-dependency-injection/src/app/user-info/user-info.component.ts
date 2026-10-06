import { Component, Input } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <p>{{ user.id }} {{ user.email }}</p>
    <p>{{ user.name }}</p>
    <p>{{ user.username }}</p>
    <p>{{ user.phone }}</p>
    <p>{{ user.website }}</p>
    <p>{{ user.company.name }}</p>
    <p>{{ user.company.catchPhrase }}</p>
    <p>{{ user.company.bs }}</p>
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input() user: User = {
    id: -1,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  };
}
