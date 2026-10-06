import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  templateUrl: `app.component.html`,
})
export class AppComponent implements OnInit {
  userService = inject(UserService);

  userData: User[] = [];

  constructor() {}

  async ngOnInit(): Promise<void> {
    const data = this.userService.getUserData();
    this.userData = await data;
  }
}
