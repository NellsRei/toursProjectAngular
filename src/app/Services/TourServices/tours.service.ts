import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../../Models/tourModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private readonly tourslink= "http://localhost:3005/tour"
  private readonly tourlink= "http://localhost:3005/tour/:id"
  constructor(private http:HttpClient) { }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourslink)
  }
  deleteTour(id: string): Observable<void> {
    return this.http.delete<void>(this.tourlink)
  }
}
