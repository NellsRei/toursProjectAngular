import { Routes } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookingComponent } from './booking/booking.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path: '', component:SectionsComponent},
    {path:'booking', component:BookingComponent},
    {path:'notfound', component:NotFoundComponent},
    {path:'signupform', component:SignupformComponent},
    {path:'login', component:LoginformComponent},
    {path:'account', component:AccountComponent},
    {path:"**", component:NotFoundComponent}
    
];  
