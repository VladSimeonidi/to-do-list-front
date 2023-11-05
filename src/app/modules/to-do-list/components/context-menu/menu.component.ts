import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Todo } from "../../models/todo";
import { ToDoEntityService } from "../../store/to-do-entity.service";
import { EditTaskDialogComponent } from "../edit-task-dialog/edit-task-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-context-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input() todo: Todo | undefined;

  constructor(private todoEntityService: ToDoEntityService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public deleteTodo(todo: Todo) {
    this.todoEntityService.delete(todo._id);
  }

  public openEditDialog(todo: Todo) {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: todo,
    });
  }
}
