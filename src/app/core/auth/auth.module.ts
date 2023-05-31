import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./store/reducers";
import * as fromAuth from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./services/auth.guard";
import {AuthService} from "./services/auth.service";
import {RegisterComponent} from './register/register.component';
import {TasksStoreModule} from "../../shared/tasks-store/tasks-store.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    TasksStoreModule,
    MatButtonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, authReducer, {metaReducers: fromAuth.metaReducers}),
    EffectsModule.forFeature([AuthEffects]),
    MatProgressSpinnerModule,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard,
      ],
    };
  }
}
