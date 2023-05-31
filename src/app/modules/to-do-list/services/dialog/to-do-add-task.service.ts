import {Inject, Injectable} from "@angular/core";
import {ToDoDialogAddTask} from "../../models/to-do-dialog";
import {ToDoDialogService} from "./to-do-dialog.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ToDoEntityService} from "../../store/to-do-entity.service";
import {Todo} from "../../models/todo";

@Injectable()
export class ToDoAddTaskService extends ToDoDialogService implements ToDoDialogAddTask {

  constructor(
    protected override dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public override data: Todo,
    protected override fb: FormBuilder,
    private todoEntityService: ToDoEntityService,
  ) {
    super(dialogRef, data, fb);
  }

  public add(): void {
    if (this.isFormValid()) {
      const formData = this.form.value;
      this.todoEntityService.add(formData as Todo);
      this.close();
    }
  }
}
