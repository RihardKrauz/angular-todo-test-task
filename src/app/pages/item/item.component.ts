import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TodoItem } from '@todo-list-app/models/todo-item';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, finalize, map, switchMap} from 'rxjs/operators';
import {TodoDataService} from '@todo-list-app/services/todo-data/todo-data.service';

@Component({
    selector: 'tdl-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit, OnDestroy {
    private subs = new Subscription();
    public isLoading = false;

    public todo$: Observable<TodoItem> = this.route.paramMap.pipe(
        filter(params => params.has('itemId')),
        map(params => params.get('itemId')),
        switchMap(itemId => this.todoDataService.getTodoById(itemId)),
    );

    constructor(private router: Router, private route: ActivatedRoute, private todoDataService: TodoDataService) {
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public completeTodoItem(todoId: string): void {
        this.isLoading = true;
        this.subs.add(this.todoDataService.completeTodo(todoId).pipe(
            finalize(() => this.isLoading = false)
        ).subscribe(() => this.router.navigateByUrl('/list')));
    }

}
