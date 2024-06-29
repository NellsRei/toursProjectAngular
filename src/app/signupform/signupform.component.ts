import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css'
})
export class SignupformComponent implements OnInit {
  form!:FormGroup

  constructor(private auth:AuthenticationService, private router:Router){}
  ngOnInit(): void {
      this.form = new FormGroup({
        username : new FormControl(null, Validators.required),
        Email : new FormControl(null, [Validators.email]),
        Password: new FormControl(null, this.passwordValidator)

        
      })
      
  }
  onSubmit(){
    // console.log(this.form)
    this.auth.registerUser(this.form.value).subscribe(res=>{
      
      console.log (res.Message)
       // Store the username in session storage
      // sessionStorage.setItem('username', this.form.value.username)
      this.router.navigate(['/login'])
      
      
    })
  }
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == undefined) {
      // console.log('Value undefined');
      return { passwordValidator: true }; // Or handle this case as per your application's logic
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);

      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }
    }

    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar) {
      console.log('Strong Password')
      return null
    } else {
      console.log('Weak Password. Make it stronger')
      return { passwordValidator: true }
    }
  }
}