import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking.routing';
import { BookingComponent } from './booking.component';
import { FlightModule } from '../../components/flight/flight.module';
import { SearchModule } from '../../components/search/search.module';
import { MapModule } from '../../components/map/map.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FlightModule,
    SearchModule,
    MapModule
  ]
})
export class BookingModule { }
