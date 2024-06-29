import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tour } from '../Models/tourModel';
import { ToursService } from '../Services/TourServices/tours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent implements OnInit {

  Tours:Tour[]= []
  constructor(private tourService:ToursService){}
  ngOnInit(): void {
    this.tourService.getTours().subscribe(data => {
      this.Tours = data
    })  
  }
  selectedTour(tourid:string){
    sessionStorage.setItem('tourid', tourid)
  }
}
