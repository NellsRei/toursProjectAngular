import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StatusService } from '../Services/Status/status.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const statusService = inject(StatusService)

  statusService.setStatus()


  if (statusService.checkAdminStatus()) {
    return true
  } else {
    
    router.navigate(['/notfound'])
    return false
  }
}
