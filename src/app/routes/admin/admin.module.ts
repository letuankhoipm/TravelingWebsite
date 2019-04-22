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
import { EditorComponent } from './editor/editor.component';
import { NgxEditorModule } from '@shared/ngx-editor/ngx-editor.module';

@NgModule({
  declarations: [DashboardComponent, AddTourComponent, ListTourComponent, EditorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxSelectModule,
    UploadImageModule,
    AngularFirestoreModule,
    NgxEditorModule
  ]
})
export class AdminModule { }
