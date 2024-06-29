import { Component } from '@angular/core';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [HotelsComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

}
