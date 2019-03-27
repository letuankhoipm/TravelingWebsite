import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardFlightModule } from 'src/app/shared/boxcard/card-flight/card-flight.module';

@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    OwlModule,
    NgxPaginationModule,
    CardFlightModule
  ],
  exports: [FlightComponent]
})
export class FlightModule { }
