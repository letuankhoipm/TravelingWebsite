import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  tab_check = [
    {active: true, name: 'Flights', icon: 'plane-departure'},
    {active: false, name: 'Hotels', icon: 'hotel'},
    {active: false, name: 'Cars', icon: 'car'},
    {active: false, name: 'Cruises', icon: 'ship'}
  ];

  constructor() { }

  change_tab(vl){
    for (let index = 0; index < this.tab_check.length; index++) {
      if(vl == index){
        this.tab_check[index].active = true;
      }else{
        this.tab_check[index].active = false;
      }
    }
  }

  ngOnInit() {
  }

}
