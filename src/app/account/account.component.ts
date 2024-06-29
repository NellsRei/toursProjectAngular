import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../Services/UsersService/users.service';
import { User } from '../Models/userModel';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToursService } from '../Services/TourServices/tours.service';
import { Tour } from '../Models/tourModel';
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
  constructor(private usersService:UsersService, private tourService:ToursService, private hotelService:HotelServiceService){}
  allUsers:User[] = []
  Tours:Tour[]= []
  Hotels:Hotel[] = []

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


    
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
