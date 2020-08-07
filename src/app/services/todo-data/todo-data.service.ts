import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TodoItem} from '@todo-list-app/models/todo-item';
import {StorageService} from '@todo-list-app/services/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class TodoDataService {

    constructor(private storageService: StorageService) {
    }

    public getTodos(): Observable<TodoItem[]> {
        // 'of' is for simulating async response from server
        return of(this.storageService.getTodos());
    }

    public getTodoById(todoItemId: string): Observable<TodoItem> {
        const todoItems = this.storageService.getTodos() || [];
        const item = todoItems.find(i => i.id === todoItemId);

        // 'of' is for simulating async response from server
        return item ? of(item) : of(null);
    }

    public addTodo(todo: TodoItem): Observable<boolean> {
        const todoItems = this.storageService.getTodos() || [];
        todoItems.push(todo);
        this.storageService.setTodos(todoItems);

        // 'of' is for simulating async response from server
        return of(true);
    }

    public editTodo(todoItemId: string, todoItem: TodoItem): Observable<boolean> {
        const todoItems = this.storageService.getTodos() || [];
        const itemToEdit = todoItems.find(item => item.id === todoItemId);
        if (!itemToEdit || !todoItem) { return of(false); }

        for (const todoProp in itemToEdit) {
            if (!itemToEdit.hasOwnProperty(todoProp)) { continue; }
            itemToEdit[todoProp] = todoItem[todoProp];
        }

        this.storageService.setTodos(todoItems);

        // 'of' is for simulating async response from server
        return of(true);
    }

    public completeTodo(todoItemId: string): Observable<boolean> {
        const todoItems = this.storageService.getTodos() || [];
        const itemToEdit = todoItems.find(item => item.id === todoItemId);
        if (!itemToEdit) { return of(false); }

        itemToEdit.completed = true;

        this.storageService.setTodos(todoItems);

        // 'of' is for simulating async response from server
        return of(true);
    }

}
