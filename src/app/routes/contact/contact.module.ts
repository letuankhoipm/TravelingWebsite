import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { MapModule } from '@components/map/map.module';
import { ShareModule } from '@shared/share/share.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MapModule,
    ShareModule
  ]
})
export class ContactModule { }
