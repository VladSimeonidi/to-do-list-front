import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {
  }

  private getAuthToken(): string | null {
    return localStorage.getItem("token");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getAuthToken();

    if (token) {
      request = request.clone(
        {headers: request.headers.set('Authorization', token)},
      );
    }

    return next.handle(request);
  }
}
