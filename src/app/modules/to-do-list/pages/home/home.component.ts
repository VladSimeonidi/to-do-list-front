import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ToDoEntityService} from "../../store/to-do-entity.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  public data$ = this.todoEntityService.data$;

  constructor(private todoEntityService: ToDoEntityService) {
  }

  ngOnInit(): void {
  }
}
