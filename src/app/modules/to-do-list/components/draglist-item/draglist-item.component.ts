import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Todo} from "../../models/todo";
import {priority} from "../../../../config/enums/priority.enum";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: "app-draglist-item",
  templateUrl: "./draglist-item.component.html",
  styleUrls: ["./draglist-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraglistItemComponent implements OnInit, OnChanges {
  @Input() todo!: Todo;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkRequiredFields(this.todo)
  }

  public checkRequiredFields(input: Todo) {
    if (!input) {
      throw new Error("Attribute 'a' is required");
    }
  }
}
