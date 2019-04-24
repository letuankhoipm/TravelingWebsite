import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  @ViewChild('myDiv') private myDiv: ElementRef;

  color = '#ed0bcd';
  hex = 'hex';
  checkOpenTool: boolean = false;
  html = [];

  constructor() {
    this.html[0] = '';
  }

  ngOnInit() {
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

  get() {
    console.log(this.html);
  }

  onData(vl) {
    console.log(vl);
  }

  openTool() {
    this.checkOpenTool = !this.checkOpenTool;
  }

  exec(vl) {
    document.execCommand(vl, false, null);
  }

}
