import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections/sections.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RouterOutlet } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SectionsComponent,SignupformComponent, LoginformComponent, RouterOutlet, BookingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toursproject';
}
