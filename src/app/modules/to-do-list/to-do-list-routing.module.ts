import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosResolver } from "./resolvers/todos.resolver";
import { HomeComponent } from "./pages/home/home.component";
import routesConstants from "../../config/constants/routes.constants";
import {TaskBoardComponent} from "./pages/task-board/task-board.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: routesConstants.todo.todoList,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    resolve: {
      todos: TodosResolver,
    },
    children: [
      {
        path: routesConstants.todo.todoList,
        component: TaskBoardComponent,
        data: {
          title: "Tasks"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule {
}
