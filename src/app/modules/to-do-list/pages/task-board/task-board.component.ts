import { Component, OnInit } from '@angular/core';
import {ToDoEntityService} from "../../store/to-do-entity.service";

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  public data$ = this.todoEntityService.data$;

  constructor(private todoEntityService: ToDoEntityService) {
  }
  ngOnInit(): void {
  }

}
