import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { AuthGuard } from "./core/auth/services/auth.guard";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import routesConstants from "./config/constants/routes.constants";

const routes: Routes = [
  {
    path: "",
    redirectTo: routesConstants.todo.tasks,
    pathMatch: "full",
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: routesConstants.todo.tasks,
        loadChildren: () => import("./modules/to-do-list/to-do-list.module").then(m => m.ToDoListModule),
      },
    ],
  },
  {
    path: routesConstants.auth.auth,
    component: AuthLayoutComponent,
    loadChildren: () => import("./core/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "**",
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
