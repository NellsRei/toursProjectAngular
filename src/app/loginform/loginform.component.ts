import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/AuthenticationService/authentication.service';
import { Router } from '@angular/router';
import { User } from '../Models/userModel';


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
      // console.log("trial1")
      localStorage.setItem('token',res.token)
      // sessionStorage.setItem('userid',)
      // console.log(res.userid)
      
      
      this.message = res.Message

      if(res.token){
        this.router.navigate(['/booking'])
      }
      
    })
  }
}
