import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly usersURL = "http://localhost:3005/users"
  private readonly userURL = "http://localhost:3005/users/:id"
  constructor(private http:HttpClient) { }

  getUsersDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL)
  }
  getUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL)
  }

}

