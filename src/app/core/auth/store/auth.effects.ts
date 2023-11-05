import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action.types";
import { catchError, switchMap, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, of } from "rxjs";

@Injectable()

export class AuthEffects {

  public InvokeRegister$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.invokeRegister),
      switchMap((action) => this.auth.register(action.payload)
        .pipe(
          map((response) => {
              this.router.navigateByUrl("/auth/login");
              return AuthActions.registerSuccess();
            },
          ),
          catchError(() => of(AuthActions.registerError())),
        )),
    ),
  );

  public Invokelogin$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.invokelogin),
      switchMap((action) => this.auth.login(action.payload)
        .pipe(
          map((response) => {
              localStorage.setItem("token", response.token);
              localStorage.setItem("user", JSON.stringify(response.user));
              this.router.navigateByUrl("/tasks/to-do-list");
              return AuthActions.loginSuccess(response);
            },
          ),
          catchError(() => of(AuthActions.loginError())),
        ),
      ),
    ),
  );

  public logout$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(async action => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.router.navigateByUrl("/auth/login").then(() => window.location.reload());
      }),
    ),
    {dispatch: false},
  );

  constructor(private actions$: Actions, private router: Router, private auth: AuthService) {
  }

}
