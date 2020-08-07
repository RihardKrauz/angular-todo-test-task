import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {TodoItem} from '@todo-list-app/models/todo-item';
import {TodoDataService} from '@todo-list-app/services/todo-data/todo-data.service';
import { finalize } from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'tdl-create-item',
    templateUrl: './create-item.component.html',
    styleUrls: ['./create-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateItemComponent implements OnInit, OnDestroy {
    private subs = new Subscription();
    public isLoading: boolean;

    constructor(private todoDataService: TodoDataService, private router: Router) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public addTodoItem(item: TodoItem): void {
        this.isLoading = true;
        this.subs.add(this.todoDataService.addTodo(item)
            .pipe(finalize(() => this.isLoading = false))
            .subscribe(() => this.router.navigateByUrl('/list')));
    }

}
