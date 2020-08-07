import {Injectable} from '@angular/core';
import {TodoItem} from '@todo-list-app/models/todo-item';
import {StorageKeys} from './storage-keys';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    setTodos(todos: TodoItem[] = []): void {
        localStorage.setItem(StorageKeys.TODOS, JSON.stringify(todos));
    }

    getTodos(): TodoItem[] {
        const todosJson = localStorage.getItem(StorageKeys.TODOS) || '[]';
        let result;
        try {
            result = JSON.parse(todosJson);
        } catch (ex) {
            console.error('Error while parsing JSON todos');
        }
        return result;
    }
}
