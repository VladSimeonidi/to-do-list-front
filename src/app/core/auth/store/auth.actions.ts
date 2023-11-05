import { createAction, props } from "@ngrx/store";
import { authHttpResponse, loginFormRequestData, registerFormRequestData } from "../model/user.model";

export const invokelogin = createAction(
  "[Login Page] User Invoke Login",
  props<{ payload: loginFormRequestData }>(),
);
export const loginSuccess = createAction(
  "[Login Page] User Login Success",
  props<authHttpResponse>(),
);

export const loginError = createAction(
  "[Login Page] User Login Error",
);

export const logout = createAction(
  "[Login Page] User Logout",
);

export const invokeRegister = createAction(
  "[Register Page] User Invoke Register",
  props<{ payload: registerFormRequestData }>(),
);

export const registerError = createAction(
  "[Register Page] User Register Error",
);

export const registerSuccess = createAction(
  "[Register Page] User Register Success",
);
