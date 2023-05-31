import { TestBed } from '@angular/core/testing';

import { ToDoHttpService } from './to-do-http.service';

describe('ToDoListHttpService', () => {
  let service: ToDoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
