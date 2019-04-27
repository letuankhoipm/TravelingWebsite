import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { TourCardModule } from '../../components/tour-card/tour-card.module';
import { OwlModule } from 'ngx-owl-carousel';
import { SearchModule } from '@components/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TourCardModule,
    OwlModule,
    SearchModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
