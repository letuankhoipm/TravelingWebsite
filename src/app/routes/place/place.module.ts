import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceRoutingComponent } from './place.routing';

@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingComponent
  ]
})
export class PlaceModule { }
