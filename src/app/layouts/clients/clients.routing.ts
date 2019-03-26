import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            { 
                path: '', 
                loadChildren: "../../routes/home/home.module#HomeModule"
            },
            {
                path: 'booking',
                loadChildren: "../../routes/booking/booking.module#BookingModule"
            },
            {
                path: 'contact',
                loadChildren: "../../routes/contact/contact.module#ContactModule"
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class ClientsRoutingModule { }
