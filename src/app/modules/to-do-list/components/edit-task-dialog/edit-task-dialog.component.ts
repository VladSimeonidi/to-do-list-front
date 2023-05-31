import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ToDoDialogEditTask } from "../../models/to-do-dialog";
import { ToDoEditTaskService } from "../../services/dialog/to-do-edit-task.service";

@Component({
  selector: "app-edit-task-dialog",
  templateUrl: "./edit-task-dialog.component.html",
  styleUrls: ["./edit-task-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: ToDoDialogEditTask,
    useClass: ToDoEditTaskService,
  }]
})
export class EditTaskDialogComponent implements OnInit {
  public prioritiesList = this.editDialog.prioritiesList;
  public form = this.editDialog.form;
  public data = this.editDialog.getData()

  constructor(private editDialog: ToDoDialogEditTask) {
  }

  ngOnInit(): void {
    this.form.patchValue({
      title: this.data.title,
      description: this.data.description,
      priority: this.data.priority,
      isCompleted: this.data.isCompleted,
    })

  }

  public edit(): void {
    this.editDialog.edit();
  }

  public close() {
    this.editDialog.close();
  }

}
