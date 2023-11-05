import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ToDoListRoutingModule} from "./to-do-list-routing.module";
import {ToDoHttpService} from "./services/to-do-http.service";
import {DroplistGroupComponent} from "./components/droplist-group/droplist-group.component";
import {ToDoDataService} from "./store/to-do-data.service";
import {ToDoEntityService} from "./store/to-do-entity.service";
import {TodosResolver} from "./resolvers/todos.resolver";
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from "@ngrx/data";
import {Todo} from "./models/todo";
import {HomeComponent} from "./pages/home/home.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {DraglistItemComponent} from "./components/draglist-item/draglist-item.component";
import {AddTaskBarComponent} from "./components/add-task-bar/add-task-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MenuComponent} from './components/context-menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AddTaskDialogComponent} from './components/add-task-dialog/add-task-dialog.component';
import {EditTaskDialogComponent} from './components/edit-task-dialog/edit-task-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ObjectValueToKeysPipePipe} from './pipes/object-value-to-keys-pipe.pipe';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DraglistComponent } from './components/draglist/draglist.component';
import { TaskBoardComponent } from './pages/task-board/task-board.component';
import {TasksStoreModule} from "../../shared/tasks-store/tasks-store.module";
import {compareTodos} from "./utils";
import { SortTodosComponent } from './components/sort-todos/sort-todos.component';

const EntityMetaData: EntityMetadataMap = {
  Todo: {
    sortComparer: compareTodos,
    selectId: (todo: Todo) => todo._id,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
    additionalCollectionState: {
      total: 100,
    }
  },
};
@NgModule({
  declarations: [
    DroplistGroupComponent,
    HomeComponent,
    DraglistItemComponent,
    AddTaskBarComponent,
    MenuComponent,
    AddTaskDialogComponent,
    EditTaskDialogComponent,
    ObjectValueToKeysPipePipe,
    DraglistComponent,
    TaskBoardComponent,
    SortTodosComponent,
  ],
  imports: [
    CommonModule,
    TasksStoreModule,
    ToDoListRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
  ],
  providers: [
    ToDoHttpService,
    ToDoEntityService,
    ToDoDataService,
    TodosResolver
  ]
})
export class ToDoListModule {
  constructor(private eds: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private todoDataService: ToDoDataService) {
    eds.registerMetadataMap(EntityMetaData);
    entityDataService.registerService("Todo", todoDataService);
  }
}
