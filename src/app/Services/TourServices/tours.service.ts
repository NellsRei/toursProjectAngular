import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour, TourReq, TourResponse } from '../../Models/tourModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private readonly tourslink= "http://localhost:3005/tour"
  private readonly tourlink= "http://localhost:3005/tour/"
  constructor(private http:HttpClient) { }

  //a service for getting all tours
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourslink)
  }
  // a service for deleting tours
  deleteTour(id: string): Observable<void> {
    console.log('reaching here')
    return this.http.delete<void>(this.tourlink + id)
  }
  //added a service for adding tours
  addTour(newTour:TourReq): Observable<TourResponse>{
    return this.http.post<TourResponse>(this.tourslink , newTour)
  }
  //updating a tour
  updateTour(updatedTour:TourReq, id:string): Observable<TourResponse>{
    return this.http.patch<TourResponse>(this.tourlink, updatedTour  + id)
  }
}
