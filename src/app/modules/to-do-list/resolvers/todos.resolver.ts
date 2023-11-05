import {Injectable} from "@angular/core";
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import {first, Observable, tap} from "rxjs";
import {ToDoEntityService} from "../store/to-do-entity.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class TodosResolver implements Resolve<boolean> {

  constructor(private todoService: ToDoEntityService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.todoService.loaded$.pipe(tap(loaded => {
        if (!loaded) this.todoService.getWithQuery("");
      }),
      first(),
      catchError(err => {
        return []
      }));

  }
}
