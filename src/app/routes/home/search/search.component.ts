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
