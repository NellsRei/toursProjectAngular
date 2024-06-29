import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/UsersService/users.service';
import { User } from '../Models/userModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {

  username: string | null = ''
  constructor(private usersService:UsersService){}
  allUsers:User[] = []
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username')
    console.log(this.username)

    this.usersService.getUsersDetails().subscribe(res =>{
      this.allUsers = res
      // console.log(this.allUsers)
    })
  }
}
