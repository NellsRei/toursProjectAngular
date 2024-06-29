import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../Services/HotelServices/hotel-service.service';
import { CommonModule } from '@angular/common';
import { Hotel } from '../Models/hotelModel';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = []
  filteredHotels: Hotel[] = []
  selectedLocation: string = ''
  selectedHotel: Hotel | null = null
  bookingForm!: FormGroup
  tourid: string | null= ''
  hotelid: string | null= ''

  constructor(private hotelService: HotelServiceService, private route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data
      this.filterHotels()
    })

    // Watch for query parameter changes
    this.route.queryParams.subscribe(params => {
      this.selectedLocation = params['destination'] || ''
      this.filterHotels()
    })

    this.bookingForm = this.fb.group({
      date: ['']
    })
  }

  filterHotels(): void {
    if (this.selectedLocation) {
      this.filteredHotels = this.hotels.filter(hotel => hotel.location.toLowerCase() === this.selectedLocation.toLowerCase())
    } else {
      this.filteredHotels = this.hotels
    }
  }
  selectHotel(hotel: Hotel, hotelid:string): void {
    this.selectedHotel = hotel
    sessionStorage.setItem('hotelid', hotelid)
  }
  onSubmit(): void {
    if (this.bookingForm.valid) {
      const bookingDetails = this.bookingForm.value
      this.tourid = sessionStorage.getItem("tourid")
      this.hotelid = sessionStorage.getItem('hotelid')
      console.log('Booking details:', bookingDetails)
      console.log('Booked Tour:',this.tourid)
      console.log('Booked Hotel:',this.hotelid)

    }
  }

}
