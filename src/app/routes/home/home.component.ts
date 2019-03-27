import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public places = [
    {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },{
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },{
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },{
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },{
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },{
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    },
  ]

  public customOptions: any = {
    margin: 20,
    loop: true,
    dots: true,
    center: false,
    slideBy: 1,
    autoplay: true,
    dotsEach: true,
    responsive : {
      0 : {
        items: 1
      },
      660 : {
        items: 2
      },
      920 : {
        items: 3
      },
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
