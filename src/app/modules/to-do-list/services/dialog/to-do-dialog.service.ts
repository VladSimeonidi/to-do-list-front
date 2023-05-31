import {Inject, Injectable} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToDoDialog} from "../../models/to-do-dialog";
import {Todo} from "../../models/todo";
import {priority} from "../../../../config/enums/priority.enum";

@Injectable()
export class ToDoDialogService implements ToDoDialog {

  public prioritiesList: { value: number, viewValue: string }[] = [
    {
      value: priority.low,
      viewValue: "Low"
    },
    {
      value: priority.medium,
      viewValue: "Medium"
    },
    {
      value: priority.high,
      viewValue: "High"
    },
  ];

  public form = this.fb.nonNullable.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    priority: [1],
    isCompleted: [false]
  });

  constructor(
    protected dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    protected fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  getData(): Todo {
    return this.data;
  }

  public isFormValid(): boolean {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  public close() {
    this.dialogRef.close();
  }

}
