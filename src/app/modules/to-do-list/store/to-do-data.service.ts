import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator, QueryParams} from "@ngrx/data";
import {Todo} from "../models/todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Update} from '@ngrx/entity';
import {ToDoHttpService} from "../services/to-do-http.service";

@Injectable()
export class ToDoDataService extends DefaultDataService<Todo> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private todoHttp: ToDoHttpService) {
    super("Todo", http, httpUrlGenerator);
  }

  public override getAll(): Observable<Todo[]> {
    return this.todoHttp.getAllTodos();
  }

  public override getWithQuery(queryParams: QueryParams): Observable<Todo[]> {
    return this.todoHttp.getTodosWithQuery(queryParams);
  }

  public override add(data: Partial<Todo>): Observable<Todo> {
    return this.todoHttp.postTodo(data);
  }

  public override delete(_id: string): Observable<string | number> {
    return this.todoHttp.deleteTodo(_id);
  }

  public override update(update: Update<Todo>): Observable<Todo> {
    return this.todoHttp.updateTodo(update);
  }
}
