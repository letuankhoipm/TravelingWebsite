import { Component, OnInit, Input, Output, HostListener, ViewChild, ElementRef, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ngx-select',
  templateUrl: './ngx-select.component.html',
  styleUrls: ['./ngx-select.component.scss']
})
export class NgxSelectComponent implements OnInit, OnChanges {
  public currentOption = 'Thành Phố';
  public isSelecting = false;
  @Input() dataList: any[];
  @Input() defaultOption: string | number;
  @Input() valueOption: number;
  @Output() selectedValue: any;
  @Output() data = new EventEmitter<number>();

  @ViewChild('selectBox')  selectBox: ElementRef;



  @HostListener('document:click', ['$event.target']) onClickOutSide(target) {
    if (target !== this.selectBox.nativeElement) {
      this.isSelecting = false;

    }
  }

  getData(vl) {
    this.data.emit(vl);
  }




  constructor() {

  }

  ngOnInit() {
    this.addDefaultOption();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentOption = this.dataList[this.valueOption - 1].name;
  }

  // private methods
  private addDefaultOption(): void {
    if (typeof this.defaultOption === 'number') {
      this.currentOption = this.dataList[this.defaultOption].name;
    } else if (typeof this.defaultOption === 'string') {
      this.currentOption = this.defaultOption;
    } else {
      this.currentOption = this.dataList[0].name;
    }
  }

  // public methods
  public showSelectBox() {
    this.isSelecting = !this.isSelecting;
  }

  public changeOptionTo(i) {
    this.currentOption = this.dataList[i].name;
    this.isSelecting = !this.isSelecting;
  }

  // getData(vl) {
  //   alert(vl);
  // }

}
