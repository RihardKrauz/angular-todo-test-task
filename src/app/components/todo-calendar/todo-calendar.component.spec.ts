import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCalendarComponent } from './todo-calendar.component';

describe('CalendarComponent', () => {
  let component: TodoCalendarComponent;
  let fixture: ComponentFixture<TodoCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
