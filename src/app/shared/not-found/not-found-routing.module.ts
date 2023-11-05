import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routesConstants from '../../config/constants/routes.constants';
import { TaskBoardComponent } from '../../modules/to-do-list/pages/task-board/task-board.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: "",
    component: NotFoundComponent,
    data: {
      title: "Not found"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
