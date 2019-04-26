import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxEditorComponent implements OnInit, OnChanges {

  @ViewChild('myDiv') private myDiv: ElementRef;
  @Input() data: any;
  @Input() minHeight: any;
  @Input() placeholderInput: any;
  @Output() dataOutput = new EventEmitter<string>();

  color = '#ed0bcd';
  hex = 'hex';
  checkOpenTool: boolean = false;
  dataCopy: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataCopy = this.data;
  }

  getData() {
    this.dataOutput.emit(this.myDiv.nativeElement.innerHTML);
  }

  changeColor(vl) {
    document.execCommand('forecolor', false, vl);
  }

  checkSelectText() {
    if (window.getSelection().toString()) {
      this.checkOpenTool = true;
    } else {
      this.checkOpenTool = false;
    }
  }

  getDataText() {
    this.data = this.myDiv.nativeElement.innerHTML;
  }

  openTool() {
    this.checkOpenTool = !this.checkOpenTool;
  }

  exec(vl) {
    document.execCommand(vl, false, null);
  }

}
