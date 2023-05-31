import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ToDoEntityService} from "../../store/to-do-entity.service";
import {MatDialog} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {By} from "@angular/platform-browser";
import {Todo} from "../../models/todo";

fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const fakeToDoEntityService = jasmine.createSpyObj("ToDoEntityService", ["delete"]);
  const fakeMatDialog = jasmine.createSpyObj("MatDialog", ["open"]);
  const todo: Todo = {
    _id: "64753aa97369c5d7d4e8f116",
    title: "as",
    description: "as",
    owner: "64482f33f5746733169d85b2",
    isCompleted: true,
    priority: 1,
    createdAt: "2023-05-29T23:52:09.172Z",
    updatedAt: "2023-05-30T01:12:07.788Z",
    __v: 0,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [MenuComponent],
      providers: [
        {
          provide: ToDoEntityService, useValue: fakeToDoEntityService
        },
        {
          provide: MatDialog, useValue: fakeMatDialog
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect button to be present in template', () => {
    const button = fixture.debugElement.query(By.css("button"));
    expect(button).toBeTruthy();
  });

  it('expect button to be present in template', () => {
    const button = fixture.debugElement.query(By.css("button"));
    expect(button).toBeTruthy();
  });

  it('expect method deleteTodo return undefined', () => {
    const result = component.deleteTodo(todo);
    expect(result).toBeUndefined();
  });

  it('expect method deleteTodo to be called with todo', () => {
    const event = spyOn(component.deleteTodo(todo), "click");
    expect(event).toHaveBeenCalledWith(todo);
  });
});
