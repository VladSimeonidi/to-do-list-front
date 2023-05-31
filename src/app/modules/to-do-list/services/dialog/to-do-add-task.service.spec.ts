import { TestBed } from '@angular/core/testing';

import { ToDoAddTaskService } from './to-do-add-task.service';

describe('ToDoAddTaskService', () => {
  let service: ToDoAddTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoAddTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
