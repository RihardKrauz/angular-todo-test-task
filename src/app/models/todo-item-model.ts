import {TodoItem} from './todo-item';
import {TodoTag} from './todo-tag';

export class TodoItemModel implements TodoItem {
    public id: string;
    public completed: boolean;

    constructor(
        public title: string,
        public day: Date,
        public projects: string[] = [],
        public tags: TodoTag[] = [],
        public description?: string,
    ) {
        this.id = Date.now().toString();
        this.completed = false;
    }
}
