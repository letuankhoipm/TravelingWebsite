import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-flight',
  templateUrl: './card-flight.component.html',
  styleUrls: ['./card-flight.component.scss']
})
export class CardFlightComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit() {
  }

}
