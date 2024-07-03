import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../Services/UsersService/users.service';
import { User } from '../Models/userModel';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../Services/TourServices/tours.service';
import { Tour, TourReq } from '../Models/tourModel';
import { HotelServiceService } from '../Services/HotelServices/hotel-service.service';
import { Hotel } from '../Models/hotelModel';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{

  username: string | null = ''
  constructor(private usersService:UsersService, private tourService:ToursService, private hotelService:HotelServiceService, private router:Router){}
  allUsers:User[] = []
  Tours:Tour[]= []
  Hotels:Hotel[] = []
  form!:FormGroup
  formVisible: boolean = false

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username')
    console.log(this.username)

    this.usersService.getUsersDetails().subscribe(res =>{
      this.allUsers = res
      // console.log(this.allUsers)
    })
    this.tourService.getTours().subscribe(data => {
      this.Tours = data
    })
    this.hotelService.getHotels().subscribe(hotel =>{
      this.Hotels = hotel
    })

    //for the addtourform
    this.form = new FormGroup({
      tourname : new FormControl(null, Validators.required),
      destination : new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    }
  )

    
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  delete(id:string):void{
    this.hotelService.deleteHotel(id).subscribe(() => {
      this.Hotels = this.Hotels.filter(hotel => hotel.hotelid !== id)
      // console.log('Hotel deleted successfully')
    })
    this.tourService.deleteTour(id).subscribe(
      () =>{
    //   this.Tours = this.Tours.filter(tour => tour.tourid !== id)
      console.log('Tour deleted successfully')
  }
  )
  }
  //ensures the addtourform is visible only when the addtour btn is clicked
  toggleFormVisibility() {
    this.formVisible = !this.formVisible;
  }
  addTour(){
    const newTour:TourReq = this.form.value
    // console.log("You're about to add a tour")
    this.tourService.addTour(newTour)
    console.log(newTour)
    
  }
  onSubmit(){
    this.tourService.addTour(this.form.value).subscribe(res =>{
      console.log(res.Message)

    })
    this.form.reset()
    this.router.navigate(['/account'])
  }

  editTour(i:number){
    console.log(i)
  }
}