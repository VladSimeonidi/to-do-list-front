import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroplistGroupComponent } from './droplist-group.component';

describe('ToDoListComponent', () => {
  let component: DroplistGroupComponent;
  let fixture: ComponentFixture<DroplistGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroplistGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroplistGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
