import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '@todo-list-app/models/todo-item';

@Component({
    selector: 'tdl-todo-tile',
    templateUrl: './todo-tile.component.html',
    styleUrls: ['./todo-tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoTileComponent implements OnInit {

    @Input() item: TodoItem;

    constructor() {
    }

    ngOnInit(): void {
    }

}
