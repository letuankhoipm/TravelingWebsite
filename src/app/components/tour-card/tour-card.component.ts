import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class TourCardComponent implements OnInit {

  public tourImg = 'assets/images/pp.jpg';

  public place = {
    destination: 'Bahamas',
    duration: '7 Night tour',
    describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    review: '168 Reviews',
    infor: 'Thiên đường Trung đông'
  }

  currentRate = 3;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }

}
