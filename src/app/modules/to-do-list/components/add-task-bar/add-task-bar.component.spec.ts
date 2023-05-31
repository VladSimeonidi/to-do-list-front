import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTaskBarComponent} from './add-task-bar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ToDoDialogAddTask} from "../../models/to-do-dialog";

describe('ButtonComponent', () => {
  let component: AddTaskBarComponent;
  let fixture: ComponentFixture<AddTaskBarComponent>;

  const fakeToDoDialogAddTask = jasmine.createSpyObj("fakeDialogAddTask", ["add", "close"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskBarComponent],
      providers: [{
        provide: ToDoDialogAddTask, useClass: fakeToDoDialogAddTask,
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
