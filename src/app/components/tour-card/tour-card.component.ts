import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class TourCardComponent implements OnInit {

  // public tourImg = 'assets/images/pp.jpg';

// tslint:disable-next-line: no-input-rename
  @Input('tour') tour: any;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
  }

}
