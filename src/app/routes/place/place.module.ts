import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceRoutingComponent } from './place.routing';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceDetailComponent],
  imports: [
    CommonModule,
    PlaceRoutingComponent
  ],
  exports: [
    PlaceComponent,
    PlaceDetailComponent
  ]
})
export class PlaceModule { }
