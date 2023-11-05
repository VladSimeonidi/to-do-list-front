import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-draglist-item",
  templateUrl: "./draglist-item.component.html",
  styleUrls: ["./draglist-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraglistItemComponent implements OnInit, OnChanges {
  @Input() todo!: Todo;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.elementRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkRequiredFields(this.todo);
  }

  public checkRequiredFields(input: Todo): void {
    if (!input) {
      throw new Error("Attribute 'a' is required");
    }
  }
}
