import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userDataFromBackend = {
    name: 'John Doe',
    birthDate: '24.03.1845',
    address: 'Lohova str. 23',
    avatar: 'https://picsum.photos/200/300'
  }
}
