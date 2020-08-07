import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListComponent} from './pages/list/list.component';
import {ItemComponent} from './pages/item/item.component';
import {PageTitleComponent} from './components/page-title/page-title.component';
import {TodoTileComponent} from './components/todo-tile/todo-tile.component';
import {PageActionsPanelComponent} from './components/page-actions-panel/page-actions-panel.component';
import {TodoItemCardComponent} from './components/todo-item-card/todo-item-card.component';
import {TodoItemCardSectionComponent} from './components/todo-item-card-section/todo-item-card-section.component';
import {TodoCalendarComponent} from './components/todo-calendar/todo-calendar.component';
import {MaterialUiKitModule} from './material-ui-kit/material-ui-kit.module';
import { LoaderComponent } from './components/loader/loader.component';
import { TagBadgeComponent } from './components/tag-badge/tag-badge.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { TodoItemCardEditableComponent } from './components/todo-item-card-editable/todo-item-card-editable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ItemDetailsHeaderComponent } from './components/item-details-header/item-details-header.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ItemComponent,
        PageTitleComponent,
        TodoTileComponent,
        PageActionsPanelComponent,
        TodoItemCardComponent,
        TodoItemCardSectionComponent,
        TodoCalendarComponent,
        LoaderComponent,
        TagBadgeComponent,
        CreateItemComponent,
        TodoItemCardEditableComponent,
        ItemDetailsHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialUiKitModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
