import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'tdl-tag-badge',
    templateUrl: './tag-badge.component.html',
    styleUrls: ['./tag-badge.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagBadgeComponent {
    @Input() title: string;
    @Input() color: string;

    constructor() {
    }


}
