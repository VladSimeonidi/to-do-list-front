import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ToDoEntityService} from "../../store/to-do-entity.service";
@Component({
  selector: 'app-draglist',
  templateUrl: './draglist.component.html',
  styleUrls: ['./draglist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraglistComponent implements OnInit {
  @Input() public todos: Todo[] = [];
  @Input() public title: string = "";

  constructor(private todoEntityService: ToDoEntityService) {
  }

  ngOnInit(): void {
  }

  drop(event$: CdkDragDrop<Todo[], any>) {
    if (event$.previousContainer === event$.container) {
      moveItemInArray(event$.container.data, event$.previousIndex, event$.currentIndex);
    } else {
      const currentItem: Todo = event$.previousContainer.data[event$.previousIndex];
      this.todoEntityService.update({
        ...currentItem,
        isCompleted: !currentItem.isCompleted
      } as Todo);

      transferArrayItem(
        event$.previousContainer.data,
        event$.container.data,
        event$.previousIndex,
        event$.currentIndex,
      );
    }
  }
}
