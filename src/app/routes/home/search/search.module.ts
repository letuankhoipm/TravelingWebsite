import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FlightsFormComponent } from './forms/flights-form/flights-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    FlightsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
