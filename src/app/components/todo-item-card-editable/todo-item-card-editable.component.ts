import {ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemGenerator} from '../../utils/item-generator';
import {TodoItem} from '@todo-list-app/models/todo-item';

@Component({
    selector: 'tdl-todo-item-card-editable',
    templateUrl: './todo-item-card-editable.component.html',
    styleUrls: ['./todo-item-card-editable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemCardEditableComponent implements OnInit {

    public todoItemForm: FormGroup;

    @Output() create = new EventEmitter<TodoItem>();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    public addProject(): void {
        (this.todoItemForm.controls.projects as FormArray)
            .insert(0, new FormControl(ItemGenerator.createTitle()));
    }

    public addTag(): void {
        const newTag = ItemGenerator.createTag(ItemGenerator.createTitle());
        (this.todoItemForm.controls.tags as FormArray)
            .insert(0, this.fb.group({ title: [newTag.title], color: [newTag.color]}));
    }

    public createTodoItem(e: Event): void {
        e.preventDefault();
        if (this.todoItemForm.invalid) { return; }
        this.create.emit(this.todoItemForm.value);
    }

    private initForm(): void {
        this.todoItemForm = this.fb.group({
            id: [Date.now().toString()],
            title: ['', Validators.required],
            description: [''],
            projects: this.fb.array([]),
            tags: this.fb.array([]),
            completed: [false],
            day: new Date(),
        });
    }


}
