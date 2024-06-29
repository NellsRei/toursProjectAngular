import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReq, LoginRes, RegisterResponse, User } from '../../Models/userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = "http://localhost:3005/user/"
  constructor(private http:HttpClient) { }

  registerUser(newUser:User): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.Base_URL+"register", newUser)
  }
  loginUser(user:LoginReq): Observable<LoginRes>{
    // console.log("Wow")
    return this.http.post<LoginRes>(this.Base_URL + "login", user)
  }
}
