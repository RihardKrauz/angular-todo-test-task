import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'tdl-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
    @Input() public textLines: string[] = [];
}
