import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '@todo-list-app/models/todo-item';

@Component({
    selector: 'tdl-todo-item-card',
    templateUrl: './todo-item-card.component.html',
    styleUrls: ['./todo-item-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemCardComponent {

    @Input() public item: TodoItem;
    @Output() public completeTodo = new EventEmitter<void>();

}
