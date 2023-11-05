import { Component, OnInit } from '@angular/core';
import { ToDoEntityService } from "../../store/to-do-entity.service";

@Component({
  selector: 'app-sort-todos',
  templateUrl: './sort-todos.component.html',
  styleUrls: ['./sort-todos.component.scss'],
})
export class SortTodosComponent implements OnInit {
  selected = 'updatedAt';

  constructor(private todoEntityService: ToDoEntityService) {
  }

  ngOnInit(): void {
  }

  public sortTodos(): void {
    this.todoEntityService.getWithQuery({sort: this.selected});
  }

}
