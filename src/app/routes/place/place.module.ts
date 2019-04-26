import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceComponent } from './place.component';
import { PlaceRoutingComponent } from './place.routing';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GalleryComponent } from './place-detail/gallery/gallery.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    PlaceComponent,
    PlaceDetailComponent,
    GalleryComponent],
  imports: [
    CommonModule,
    PlaceRoutingComponent,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  exports: [
    PlaceComponent,
    PlaceDetailComponent
  ],
})
export class PlaceModule { }
