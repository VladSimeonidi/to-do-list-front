import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { ToDoEntityService } from "../../store/to-do-entity.service";

@Component({
  selector: "app-droplist-group",
  templateUrl: "./droplist-group.component.html",
  styleUrls: ["./droplist-group.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DroplistGroupComponent implements OnInit {

  public todosGroupedByIsCompleted$ = this.todoEntityService.todosGroupedByIsCompleted$;

  constructor(private todoEntityService: ToDoEntityService) {
  }

  ngOnInit(): void {
  }
}
