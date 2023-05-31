import { TestBed } from '@angular/core/testing';

import { ToDoDialogService } from './to-do-dialog.service';

describe('ToDoDialogService', () => {
  let service: ToDoDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
