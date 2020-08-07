import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemComponent} from './pages/item/item.component';
import {ListComponent} from './pages/list/list.component';
import {CreateItemComponent} from '@todo-list-app/pages/create-item/create-item.component';

const routes: Routes = [
    {path: 'list', component: ListComponent},
    {path: 'item/:itemId', component: ItemComponent},
    {path: 'create', component: CreateItemComponent},
    {path: '**', redirectTo: 'list'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
