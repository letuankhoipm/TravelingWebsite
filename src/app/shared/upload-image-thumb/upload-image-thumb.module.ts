import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageThumbComponent } from './upload-image-thumb.component';
import { UploadTaskModule } from '@shared/upload-task/upload-task.module';
import { DropzoneDirective2 } from '@shared/dropzone2.directive';

@NgModule({
  declarations: [UploadImageThumbComponent, DropzoneDirective2],
  imports: [
    CommonModule,
    UploadTaskModule
  ],
  exports: [
    UploadImageThumbComponent
  ]
})
export class UploadImageThumbModule { }
