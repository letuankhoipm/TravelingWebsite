import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlightComponent } from './card-flight.component';

@NgModule({
  declarations: [CardFlightComponent],
  imports: [
    CommonModule
  ],
  exports: [CardFlightComponent]
})
export class CardFlightModule { }
