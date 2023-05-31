import {FormControl} from "@angular/forms";

export interface UserModel {
  _id: string,
  email: string,
  username: string,
}

export interface loginFormData {
  email: FormControl<string>,
  password: FormControl<string>,
}

export interface registerFormData extends loginFormData {
  username: FormControl<string>,
}

export interface authHttpResponse {
  token: string,
  user: UserModel
}

export interface registerFormRequestData {
  email: string,
  password: string,
  username: string,
}

export interface loginFormRequestData {
  email: string,
  password: string,
}
