import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Todo, todosGroupedByIsCompleted } from '../models/todo';
import { combineLatest, from, groupBy, map, mergeMap, Observable, reduce, toArray } from 'rxjs';

@Injectable()
export class ToDoEntityService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }

  private mapTodosGroupedByIsCompleted = (arr: Todo[][]): todosGroupedByIsCompleted => {
    const [todo, done] = this.mapArrays(arr);
    return {
      todo,
      done,
    };
  };

  private reduceTodosIsCompleted = (acc: Todo[], cur: Todo) => {
    acc.push(cur);
    return acc;
  };

  public todosGroupedByIsCompleted$: Observable<todosGroupedByIsCompleted> = this.entities$
    .pipe(
      mergeMap(
        (todos: Todo[]) => from(todos)
          .pipe(groupBy(todo => todo.isCompleted), mergeMap(group => group
              .pipe(
                reduce((acc: Todo[], cur: Todo) => this.reduceTodosIsCompleted(acc, cur),
                  []
                )
              )
            ),
            toArray(),
            map((arr: Todo[][]): todosGroupedByIsCompleted => this.mapTodosGroupedByIsCompleted(arr))
          ),
      )
    );

  public data$ = combineLatest([this.todosGroupedByIsCompleted$, this.loaded$, this.loading$])
    .pipe(
      map(([todosGroupedByIsCompleted, loaded, loading]): {
        loading: boolean,
        loaded: boolean,
        todosGroupedByIsCompleted: { todo: Todo[], done: Todo[] }
      } => ({
        todosGroupedByIsCompleted,
        loaded,
        loading,
      }))
    );

  private mapArrays(arr: Todo[][]): Todo[][] {

    if (arr.length === 0) return [[], []];

    if (arr.length < 2 && arr[0].every((currentValue: Todo) => currentValue.isCompleted)) {
      arr.unshift([]);
      return arr;
    }

    if (arr.length < 2 && arr[0].every((currentValue: Todo) => currentValue.isCompleted)) {
      arr.push([]);
      return arr;
    }
    return arr.sort(this.compareFn);
  }

  private compareFn(arr1: Todo[], arr2: Todo[]): number {

    if (arr1 && arr2) {
      const isCompletedTrue = (currentValue: Todo) => currentValue.isCompleted;
      const isFirstArrayTrue = arr1.every(isCompletedTrue);
      const isSecondArrayTrue = arr2.every(isCompletedTrue);

      if (isFirstArrayTrue && !isSecondArrayTrue) {

        return 1;

      } else if (!isFirstArrayTrue && isSecondArrayTrue) {

        return -1;
      }
    }
    return 0;
  };
}
