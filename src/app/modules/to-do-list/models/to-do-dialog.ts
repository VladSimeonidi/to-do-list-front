import { FormGroup } from "@angular/forms";
import { Todo } from "./todo";

export abstract class ToDoDialog {
  public prioritiesList!: { value: number, viewValue: string }[];
  public form!: FormGroup;

  abstract close(): void;

  abstract getData(): Todo;
}

export abstract class ToDoDialogAddTask extends ToDoDialog {
  abstract add(): void;
}

export abstract class ToDoDialogEditTask extends ToDoDialog {
  abstract edit(): void;
}
