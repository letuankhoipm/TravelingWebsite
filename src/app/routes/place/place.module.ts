import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceRoutingComponent } from './place.routing';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceDetailComponent,
    TimeAgoPipe],
  imports: [
    CommonModule,
    PlaceRoutingComponent,
    NgxPaginationModule
  ],
  exports: [
    PlaceComponent,
    PlaceDetailComponent
  ]
})
export class PlaceModule { }
