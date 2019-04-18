import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { AddTourComponent } from './add-tour/add-tour.component';
import { NgxSelectModule } from '@shared/ngx-select/ngx-select.module';
import { UploadImageModule } from '@shared/upload-image/upload-image.module';

@NgModule({
  declarations: [DashboardComponent, AddTourComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxSelectModule,
    UploadImageModule
  ]
})
export class AdminModule { }
