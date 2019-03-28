import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { SearchModule } from '@components/search/search.module';


import { HomeComponent } from './home.component';
import { TourCardModule } from 'src/app/components/tour-card/tour-card.module';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchModule,
    TourCardModule,
    OwlModule,
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
