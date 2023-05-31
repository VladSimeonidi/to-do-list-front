import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MatCommonModule} from '@angular/material/core';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from "./layouts/default-layout/toolbar/toolbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {StoreModule} from "@ngrx/store";
import {AuthModule} from "./core/auth/auth.module";
import {EffectsModule} from "@ngrx/effects";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {EntityDataModule} from "@ngrx/data";
import {reducers, metaReducers} from "./store";
import {HttpErrorInterceptorService} from "./core/services/interceptors/httpErrorInterceptorService";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthInterceptorService} from "./core/services/interceptors/authInterceptorService";
import {MatListModule} from "@angular/material/list";
import { FooterComponent } from './layouts/default-layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    ToolbarComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    AuthModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router",
      routerState: RouterState.Minimal,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
