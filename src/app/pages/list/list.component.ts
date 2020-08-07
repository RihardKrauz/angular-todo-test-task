import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoDataService} from '@todo-list-app/services/todo-data/todo-data.service';
import { Observable } from 'rxjs';
import { TodoItem } from '@todo-list-app/models/todo-item';
import {Router} from '@angular/router';

@Component({
    selector: 'tdl-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

    public title = ['Hey Bubble,', 'This is your to-do list.'];
    public todos$: Observable<TodoItem[]>;

    constructor(private todoDataService: TodoDataService, private router: Router) {
    }

    ngOnInit(): void {
        this.todos$ = this.todoDataService.getTodos();
    }

    public trackById(index: number, item: TodoItem): string {
        return item ? item.id : index.toString();
    }

    public openTodoItem(todoItemId: string): void {
        this.router.navigateByUrl(`/item/${todoItemId}`);
    }
}
