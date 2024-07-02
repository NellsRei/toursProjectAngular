import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../Actions/auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthenticationService } from '../../Services/AuthenticationService/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private auth: AuthenticationService,
    private router: Router
  ) {}
  loginUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ user }) =>
        this.auth.loginUser(user).pipe(
          map((res) => {
            localStorage.setItem('token', res.token)  //to store the token
            localStorage.setItem('role', res.role)   //for the role
            sessionStorage.setItem('username', res.username)  //for the username
            this.router.navigate([''])              //navigate to the home page
            return AuthActions.loginSuccess({response:res})   //return success message
          }),
          //to catch errors and display the error message
          catchError(error =>of(AuthActions.loginFailure({Message:error.error.Message})))
          )
        )
      )
    }
    )
}
