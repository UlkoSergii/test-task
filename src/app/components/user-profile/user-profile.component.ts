import { Component } from '@angular/core';
import {AvatarComponent} from "./components/avatar/avatar.component";
import {UserDataComponent} from "./components/user-data/user-data.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    AvatarComponent,
    UserDataComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
