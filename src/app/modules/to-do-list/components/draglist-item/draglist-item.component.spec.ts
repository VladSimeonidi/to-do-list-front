import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraglistItemComponent } from './draglist-item.component';

describe('ToDoComponent', () => {
  let component: DraglistItemComponent;
  let fixture: ComponentFixture<DraglistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraglistItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraglistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
