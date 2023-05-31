import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  constructor(private _snackBar: MatSnackBar, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {

          if (error.status >= 500) this.openSnackBar("This is server side error", "Ok");

          if (error.status == 401) this.router.navigateByUrl("/auth/login");

          if (error.status < 500) this.openSnackBar(error.error, "Ok");

          return throwError(() => error);
        })
      );
  }
}
