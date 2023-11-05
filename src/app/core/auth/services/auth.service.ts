import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { authHttpResponse, loginFormRequestData, registerFormRequestData, UserModel } from "../model/user.model";
import * as API from "../../../config/constants/api.constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(requestData: loginFormRequestData): Observable<authHttpResponse> {
    return this.http.post<authHttpResponse>(API.login, requestData);
  }

  register(requestData: registerFormRequestData): Observable<UserModel> {
    return this.http.post<UserModel>(API.register, requestData);
  }
}
