import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './tour-card.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TourCardComponent],
  imports: [
    CommonModule,
    NgbRatingModule
  ],
  exports: [TourCardComponent]
})
export class TourCardModule { }
