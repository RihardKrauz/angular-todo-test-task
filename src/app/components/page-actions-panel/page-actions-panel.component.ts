import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoDataService} from '@todo-list-app/services/todo-data/todo-data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'tdl-page-actions-panel',
    templateUrl: './page-actions-panel.component.html',
    styleUrls: ['./page-actions-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageActionsPanelComponent implements OnInit {

    constructor(private todoDataService: TodoDataService, private router: Router) {
    }

    ngOnInit(): void {
    }

    public openAddTodoItemPage(): void {
        this.router.navigateByUrl('/create');
    }

}
