import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";
import * as API from "../../../config/constants/api.constants";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {Update} from "@ngrx/entity";
import {QueryParams} from "@ngrx/data";
import {buildUrl, buildUrlWithParams} from "../utils";

@Injectable()
export class ToDoHttpService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private omitKeys(obj: any): { [k: string]: unknown; } {
    const omitKeysArray = ['_id', 'createdAt', 'updatedAt', '__v'];
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !omitKeysArray.includes(key))
    );
  }



  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API.toDoList).pipe(catchError((err) => []));
  }

  public getTodosWithQuery(queryParams: QueryParams): Observable<Todo[]> {
    const url = buildUrlWithParams(this.router, queryParams);
    console.log("url", url)
    return this.http.get<Todo[]>(url).pipe(catchError((err) => []));
  }

  public postTodo(data: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(API.toDoList, data).pipe(catchError(() => []));
  }

  public deleteTodo(_id: string): Observable<string | number> {
    const url = buildUrl(this.router, _id);
    return this.http.delete<string | number>(url).pipe(catchError(() => []));
  }

  public updateTodo(update: Update<Todo>): Observable<Todo> {
    const url = buildUrl(this.router, update.id);
    const filteredObj = this.omitKeys(update.changes);
    return this.http.put<Todo>(url, filteredObj).pipe(catchError(() => []));
  }
}
