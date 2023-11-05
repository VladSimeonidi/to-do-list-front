import {Todo} from "../models/todo";
import * as API from "../../../config/constants/api.constants";
import {QueryParams} from "@ngrx/data";
import {Router} from "@angular/router";

export function compareTodos(t1: Todo, t2: Todo): number {
  const compare = new Date(t1.updatedAt).getTime() - new Date(t2.updatedAt).getTime();

  if (compare > 0) {
    return -1;
  } else if (compare < 0) {
    return 1;
  } else return 0;

}

export function buildUrl(routerService: Router, id: string | number): string {
  return routerService.createUrlTree([API.toDoList, id]).toString();
}

export function buildUrlWithParams(routerService: Router, queryParams: QueryParams): string {
  return routerService.createUrlTree([API.toDoList], {queryParams}).toString();
}
