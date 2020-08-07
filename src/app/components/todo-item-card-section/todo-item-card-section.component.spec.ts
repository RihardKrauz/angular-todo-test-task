import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCardSectionComponent } from './todo-item-card-section.component';

describe('TodoItemCardSectionComponent', () => {
  let component: TodoItemCardSectionComponent;
  let fixture: ComponentFixture<TodoItemCardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemCardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
