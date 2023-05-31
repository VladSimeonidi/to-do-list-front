import { TestBed } from '@angular/core/testing';

import { ToDoEntityService } from './to-do-entity.service';

describe('ToDoEntityService', () => {
  let service: ToDoEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
