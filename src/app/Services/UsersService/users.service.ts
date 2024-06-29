import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly userURL = "http://localhost:3005/users"
  constructor(private http:HttpClient) { }

  getUsersDetails(): Observable<User[]> {
    const token = localStorage.getItem('token') as string
    return this.http.get<User[]>(this.userURL,{
      headers:new HttpHeaders({
        token: token
      })
    })
  }
}
