import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './place.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PlaceComponent
    },
    {
        path: ':id',
        component: PlaceDetailComponent
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

export class PlaceRoutingComponent { }
