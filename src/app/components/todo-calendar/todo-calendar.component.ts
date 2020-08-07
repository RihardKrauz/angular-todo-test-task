import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'tdl-calendar',
    templateUrl: './todo-calendar.component.html',
    styleUrls: ['./todo-calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCalendarComponent implements OnInit {

    public daysOfWeek = [
        { name: 'F' },
        { name: 'S' },
        { name: 'S' },
        { name: 'M' },
        { name: 'T' },
        { name: 'W' },
        { name: 'T' },
        { name: 'F' },
    ];

    public days = [
        { date: '13', isWeekend: true },
        { date: '14', isWeekend: true },
        { date: '15', isWeekend: false },
        { date: '16', isWeekend: false },
        { date: '17', isWeekend: false },
        { date: '18', isWeekend: false },
        { date: '19', isWeekend: false },
        { date: '20', isWeekend: false },
    ];

    @Input() public selectedDay: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
