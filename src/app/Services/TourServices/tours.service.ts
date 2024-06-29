import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../../Models/tourModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private readonly tourlink= "http://localhost:3005/tour"
  constructor(private http:HttpClient) { }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourlink)
  }
}
