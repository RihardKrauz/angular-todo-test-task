import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tdl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'todo-tiles-app';
}
