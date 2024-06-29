import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/AuthenticationService/authentication.service';
import { Router } from '@angular/router';
import { User } from '../Models/userModel';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent implements OnInit{
  form!: FormGroup
  constructor(private auth:AuthenticationService, private router:Router){}
  message:string = ''
  
  ngOnInit(): void {
    this.form = new FormGroup({
      Email : new FormControl(null, [Validators.email]),
      Password: new FormControl(null, Validators.required)
    })
  }
  onSubmit(){
    console.log(this.form)
    this.auth.loginUser(this.form.value).subscribe(res =>{
      console.log("trial1")
      localStorage.setItem('token',res.token)
      localStorage.setItem('role', res.role)
      sessionStorage.setItem('username', res.username)
      // console.log(res.role)
      console.log(res.username)
      
      this.message = res.Message

      if(res.token){
        this.router.navigate(['/booking'])
      }
      
    })
  }
}
