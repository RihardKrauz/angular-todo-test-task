import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'tdl-item-details-header',
    templateUrl: './item-details-header.component.html',
    styleUrls: ['./item-details-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsHeaderComponent {

    constructor(private router: Router) {
    }

    public redirectToList(): void {
        this.router.navigateByUrl('/list');
    }
}
