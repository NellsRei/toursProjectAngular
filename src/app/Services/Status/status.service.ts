import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private role: string | null = null
  isAdmin: boolean = false
  isNormalUser: boolean = false

  constructor() {
    this.setStatus()
  }
  setStatus(): void {
    this.role = localStorage.getItem('role')
    this.isAdmin = this.role === 'admin'
    this.isNormalUser = this.role === 'user'
  }

  
  checkAdminStatus(): boolean {
    return this.role === 'admin'
  }

  
  checkNormalUserStatus(): boolean {
    return this.role === 'user'
  }
}
