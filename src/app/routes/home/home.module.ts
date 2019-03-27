import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SearchModule } from './search/search.module';
import { TourCardModule } from 'src/app/components/tour-card/tour-card.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchModule,
    TourCardModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
