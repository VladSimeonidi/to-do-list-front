import { Inject, Injectable } from "@angular/core";
import { ToDoDialogService } from "./to-do-dialog.service";
import { ToDoDialogEditTask } from "../../models/to-do-dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder } from "@angular/forms";
import { ToDoEntityService } from "../../store/to-do-entity.service";
import { Todo } from "../../models/todo";

@Injectable({
  providedIn: "root"
})
export class ToDoEditTaskService extends ToDoDialogService implements ToDoDialogEditTask {

  constructor(
    protected override dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public override data: Todo,
    protected override fb: FormBuilder,
    private todoEntityService: ToDoEntityService,
  ) {
    super(dialogRef, data, fb);
  }

  edit(): void {
    if (this.isFormValid()) {
      const formData = this.form.value;
      this.todoEntityService.update({
        ...this.data,
        ...formData
      } as Todo);
      this.close();
    }
  }
}
