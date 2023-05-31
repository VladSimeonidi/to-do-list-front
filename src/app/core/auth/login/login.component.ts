import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store";
import {invokelogin} from "../store/auth.actions";
import {loginFormData, loginFormRequestData, registerFormRequestData} from "../model/user.model";
import {Observable} from "rxjs";
import {isLoading} from "../store/auth.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup<loginFormData>;

  public isLoading$: Observable<boolean> = this.store.pipe(select(isLoading))

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public login() {

    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const loginFormValue = this.loginForm.value;
      const requestData: loginFormRequestData = {
        email: loginFormValue.email ?? "",
        password: loginFormValue.password ?? "",
      }
      this.store.dispatch(invokelogin({payload: requestData}))
    }
  }

  public checkIfFieldValidByName(name: string): boolean {
    return !!(this.loginForm.get(name)?.invalid && (this.loginForm.get(name)?.dirty || this.loginForm.get(name)?.touched));
  }

  public get getEmailValidateErrorMessage() {
    return this.checkIfFieldValidByName("email");
  }

  public get getPasswordValidateErrorMessage() {
    return this.checkIfFieldValidByName("password");
  }

}
