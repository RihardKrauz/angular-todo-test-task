import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'tdl-todo-item-card-section',
    templateUrl: './todo-item-card-section.component.html',
    styleUrls: ['./todo-item-card-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemCardSectionComponent implements OnInit {

    @Input() icon: string;
    @Input() title: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
