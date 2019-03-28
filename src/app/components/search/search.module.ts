import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FlightsFormComponent } from './forms/flights-form/flights-form.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSelectModule } from 'src/app/shared/ngx-select/ngx-select.module';

@NgModule({
  declarations: [
    SearchComponent,
    FlightsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    NgxSelectModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
