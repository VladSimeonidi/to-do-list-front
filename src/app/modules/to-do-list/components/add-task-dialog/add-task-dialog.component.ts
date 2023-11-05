import { Component, OnInit } from "@angular/core";
import { ToDoAddTaskService } from "../../services/dialog/to-do-add-task.service";
import { ToDoDialogAddTask } from "../../models/to-do-dialog";

@Component({
  selector: "app-add-task-dialog",
  templateUrl: "./add-task-dialog.component.html",
  styleUrls: ["./add-task-dialog.component.scss"],
  providers: [{
    provide: ToDoDialogAddTask,
    useClass: ToDoAddTaskService,
  }],
})
export class AddTaskDialogComponent implements OnInit {
  public prioritiesList = this.addDialog.prioritiesList;
  public form = this.addDialog.form;

  constructor(private addDialog: ToDoDialogAddTask) {
  }

  ngOnInit(): void {
  }

  public add() {
    this.addDialog.add();
  }

  public close() {
    this.addDialog.close();
  }
}
