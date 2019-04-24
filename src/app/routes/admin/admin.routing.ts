import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { ListTourComponent } from './list-tour/list-tour.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'add-tour',
        component: AddTourComponent
    },
    {
        path: 'list-tour',
        component: ListTourComponent
    },
    {
        path: 'editor',
        component: EditorComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
