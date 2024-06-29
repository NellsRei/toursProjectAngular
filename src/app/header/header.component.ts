// import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../Services/UsersService/users.service';
import { User } from '../Models/userModel';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  username: string | null = ''
  user:User[] = []
  // userid:string = ''
  constructor(private userService:UsersService){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username')
    console.log(this.username)
    
  }
  getdetails(id:string):void{
    this.userService.getUsersDetails().subscribe(res =>{
      this.user = this.user.filter(user => user.userid === id)
      this.user = res
      console.log(this.user)
    })
    
  }
  logout(){
    sessionStorage.clear()
  }
}
