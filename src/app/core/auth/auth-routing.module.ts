import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import routesConstants from "../../config/constants/routes.constants";

const routes: Routes = [
  {
    path: "",
    redirectTo: routesConstants.auth.login,
    pathMatch: "full"
  },
  {
    path:  routesConstants.auth.login,
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: routesConstants.auth.register,
    component: RegisterComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
