import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorComponent } from './ngx-editor.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [NgxEditorComponent],
  imports: [
    CommonModule,
    ColorPickerModule,
  ],
  exports: [
    NgxEditorComponent
  ]
})
export class NgxEditorModule { }
