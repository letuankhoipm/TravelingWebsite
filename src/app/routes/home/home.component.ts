import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public happyDescribe = `Bạn biết đấy, tuổi trẻ và sự tự do không thể kéo dài mãi mãi, chính vì thế, độ tuổi 20 chính là thời điểm lý tưởng để dấn thân vào những cuộc phiêu lưu và những chuyến đi tới các vùng đất xa xôi. Bạn sẽ đúc kết được vô số kinh nghiệm và những trải nghiệm đáng nhớ tại nhiều nơi hoang dã mà suốt đời bạn sẽ không thể quên. Hãy xem những gợi ý điểm đến trước khi tuổi 30 tới nhé!`;

  public happyPlace = [
    { name: 'Paris', percent: 93 },
    { name: 'London', percent: 83 },
    { name: 'Hồ Chí Minh', percent: 65 },
    { name: 'Đà Nẵng', percent: 72 }
  ];

  public places = [
    {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    }, {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    }, {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    }, {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    }, {
      destination: 'Bahamas', duration: '7 Night tour', review: '168 Reviews', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    }, {
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
    responsive: {
      0: {
        items: 1
      },
      660: {
        items: 2
      },
      920: {
        items: 3
      },
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
