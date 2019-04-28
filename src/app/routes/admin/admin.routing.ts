import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTourComponent } from './add-tour/add-tour.component';
import { ListTourComponent } from './list-tour/list-tour.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/list-tour',
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
        path: 'edit-tour/:id',
        component: EditTourComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
