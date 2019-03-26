import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking.routing';
import { BookingComponent } from './booking.component';
import { FlightModule } from 'src/app/components/flight/flight.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FlightModule
  ]
})
export class BookingModule { }
