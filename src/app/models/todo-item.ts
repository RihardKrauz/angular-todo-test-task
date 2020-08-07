import {TodoTag} from './todo-tag';

export interface TodoItem {
    id: string;
    title: string;
    description?: string;
    projects: string[];
    tags: TodoTag[];
    completed: boolean;
    day: Date;
}
