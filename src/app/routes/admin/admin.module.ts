import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { AddTourComponent } from './add-tour/add-tour.component';
import { NgxSelectModule } from '@shared/ngx-select/ngx-select.module';
import { UploadImageModule } from '@shared/upload-image/upload-image.module';
import { ListTourComponent } from './list-tour/list-tour.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxEditorModule } from '@shared/ngx-editor/ngx-editor.module';
import { UploadImageThumbModule } from '@shared/upload-image-thumb/upload-image-thumb.module';
import { EditTourComponent } from './edit-tour/edit-tour.component';

@NgModule({
  declarations: [DashboardComponent, AddTourComponent, ListTourComponent, EditTourComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxSelectModule,
    UploadImageModule,
    AngularFirestoreModule,
    NgxEditorModule,
    UploadImageThumbModule,
  ]
})
export class AdminModule { }
