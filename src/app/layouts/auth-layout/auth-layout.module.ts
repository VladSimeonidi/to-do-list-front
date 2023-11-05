import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    RouterModule,
  ],
  exports: [AuthLayoutComponent],
})
export class AuthLayoutModule {
}
