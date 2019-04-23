import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './tour-card.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from '@shared/share/share.module';

@NgModule({
  declarations: [TourCardComponent],
  imports: [
    CommonModule,
    NgbRatingModule,
    ShareModule
  ],
  exports: [TourCardComponent]
})
export class TourCardModule { }