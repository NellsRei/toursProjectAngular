import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../Models/hotelModel';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private readonly hotelURL = "http://localhost:3005/hotel"
  constructor(private http:HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelURL)
  }
}
