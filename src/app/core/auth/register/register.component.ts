import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {registerFormData, registerFormRequestData} from "../model/user.model";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store";
import {noop, Observable, tap} from "rxjs";
import {isLoading} from "../store/auth.selectors";
import {invokelogin, invokeRegister} from "../store/auth.actions";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup<registerFormData>;

  public isLoading$: Observable<boolean> = this.store.pipe(select(isLoading))

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>
  ) {
    this.registerForm = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      username: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public register() {

    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {

      const registerFormValue = this.registerForm.value;
      const requestData: registerFormRequestData = {
        email: registerFormValue.email ?? "",
        password: registerFormValue.password ?? "",
        username: registerFormValue.username ?? ""
      }

      this.store.dispatch(invokeRegister({payload: requestData}))
    }
  }

  public checkIfFieldValidByName(name: string): boolean {
    return !!(this.registerForm.get(name)?.invalid && (this.registerForm.get(name)?.dirty || this.registerForm.get(name)?.touched));
  }

  public get getEmailValidateErrorMessage() {
    return this.checkIfFieldValidByName("email");
  }

  public get getPasswordValidateErrorMessage() {
    return this.checkIfFieldValidByName("password");
  }

  public get getUsernameValidateErrorMessage() {
    return this.checkIfFieldValidByName("username");
  }

}
