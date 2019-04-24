import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public navTabs = {
    flights: true,
    hotels: false,
    cars: false,
    cruises: false
  };

  cloud1 = 'assets/images/animate/clouds-1.svg';
  cloud2 = 'assets/images/animate/clouds-2.svg';
  cloud3 = 'assets/images/animate/clouds-3.svg';
  boat2 = 'assets/images/animate/sail-boat2.svg';
  taxi2 = 'assets/images/animate/taxi2.svg';


  constructor() { }

  ngOnInit() {
  }

  public toggleTab(name: string) {
    for (const tab in this.navTabs) {
      if (name === tab) {
        this.navTabs[tab] = true;
      } else {
        this.navTabs[tab] = false;
      }
    }
  }

}
