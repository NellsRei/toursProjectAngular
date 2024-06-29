import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../Models/hotelModel';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private readonly hotelsURL = "http://localhost:3005/hotel"
  private readonly hotelUrl = "http://localhost:3005/hotel/:id"
  constructor(private http:HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsURL)
  }
  deleteHotel(id: string): Observable<void> {
    return this.http.delete<void>(this.hotelUrl)
  }
}
