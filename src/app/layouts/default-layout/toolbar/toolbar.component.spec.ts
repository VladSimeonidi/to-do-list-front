import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle should return undefined', () => {
    const result = component.toggle();
    expect(result).toBe(undefined);
  });


  it('toggleEmitter should have been called with null', () => {
    const event = spyOn(component.toggleEmitter, 'emit');
    fixture.detectChanges();
    component.toggle();
    expect(event).toHaveBeenCalledWith(null);
  });
});
