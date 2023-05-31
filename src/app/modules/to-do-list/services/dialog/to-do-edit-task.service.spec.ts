import { TestBed } from '@angular/core/testing';

import { ToDoEditTaskService } from './to-do-edit-task.service';

describe('ToDoEditTaskService', () => {
  let service: ToDoEditTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoEditTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
