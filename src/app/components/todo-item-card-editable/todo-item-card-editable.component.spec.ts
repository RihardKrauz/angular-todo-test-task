import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCardEditableComponent } from './todo-item-card-editable.component';

describe('TodoItemCardEditableComponent', () => {
  let component: TodoItemCardEditableComponent;
  let fixture: ComponentFixture<TodoItemCardEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemCardEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemCardEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
