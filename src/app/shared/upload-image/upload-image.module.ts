import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { UploadTaskModule } from '@shared/upload-task/upload-task.module';
import { DropzoneDirective } from '@shared/dropzone.directive';

@NgModule({
  declarations: [UploadImageComponent, DropzoneDirective],
  imports: [
    CommonModule,
    UploadTaskModule
  ],
  exports: [
    UploadImageComponent
  ]
})
export class UploadImageModule { }
