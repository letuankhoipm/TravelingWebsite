import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlightComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  p: number = 1;
  collection: any[];

  active_city_from = false;
  list_city = [
    { id: 1, name: 'Hồ Chí Minh' },
    { id: 2, name: 'Hà Nội' },
    { id: 3, name: 'Đà Nẵng' },
    { id: 4, name: 'Cần Thơ' },
    { id: 5, name: 'Hải Phòng' },
    { id: 6, name: 'Bình Định' },
    { id: 7, name: 'Buôn Ma Thuột' },
    { id: 8, name: 'Cà Mau' },
    { id: 9, name: 'Đà Lạt' },
    { id: 10, name: 'Điện Biên' },
    { id: 11, name: 'Đồng Hới' },
    { id: 12, name: 'Huế' },
    { id: 13, name: 'Nghệ An' },
    { id: 14, name: 'Nha Trang' },
    { id: 15, name: 'Phú Quốc' },
    { id: 16, name: 'Phú Yên' },
    { id: 17, name: 'Pleiku' },
    { id: 18, name: 'Quảng Nam' },
    { id: 19, name: 'Rạch Giá' },
    { id: 20, name: 'Sơn La' },
    { id: 21, name: 'Thanh Hóa' },
    { id: 22, name: 'Vũng Tàu' }
  ]
  vl_city_from: string = 'Thành Phố';

  active_city_to = false;
  vl_city_to: string = 'Thành Phố';


  list_menu = [
    { link: '#', name: 'Star Raiting' },
    { link: '#', name: 'Price Range' },
    { link: '#', name: 'Departure Ports' },
    { link: '#', name: 'Trip Duration' },
    { link: '#', name: 'Ships' }
  ]

  list_star = [
    { star: 5, star1: true, star2: true, star3: true, star4: true, star5: true },
    { star: 4, star1: true, star2: true, star3: true, star4: true, star5: false },
    { star: 3, star1: true, star2: true, star3: true, star4: false, star5: false },
    { star: 2, star1: true, star2: true, star3: false, star4: false, star5: false },
    { star: 1, star1: true, star2: false, star3: false, star4: false, star5: false },
  ]

  list_review = [
    { name: 'Đức Duy', des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam1.' },
    { name: 'Minh An', des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam2.' },
    { name: 'Thái Việt', des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam3.' },
    { name: 'Minh Đức', des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam4.' },
    { name: 'Hồng Phượng', des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam5.' },
  ]

  list_data = [
    { id: 1, name: 'Abudabi - Zurich', price: '1.400.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights01.jpg' },
    { id: 2, name: 'Sydney - Berlin', price: '2.300.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights02.jpg' },
    { id: 3, name: 'Ankara - Munich', price: '2.250.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights03.jpg' },
    { id: 4, name: 'Zurich- Moscow', price: '1.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights04.jpg' },
    { id: 5, name: 'Boston- Tbilisi', price: '3.800.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights05.jpg' },
    { id: 6, name: 'Amsterdam- Viena', price: '4.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights06.jpg' },
    { id: 7, name: 'Berlin- Warsaw', price: '2.900.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights07.jpg' },
    { id: 8, name: 'New York - Paris', price: '5.200.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights08.jpg' },
    { id: 9, name: 'Riga- Prague', price: '3.740.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights09.jpg' },
    { id: 10, name: 'Abudabi - Zurich', price: '1.400.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights01.jpg' },
    { id: 11, name: 'Sydney - Berlin', price: '2.300.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights02.jpg' },
    { id: 12, name: 'Ankara - Munich', price: '2.250.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights03.jpg' },
    { id: 13, name: 'Zurich- Moscow', price: '1.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights04.jpg' },
    { id: 14, name: 'Boston- Tbilisi', price: '3.800.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights05.jpg' },
    { id: 15, name: 'Amsterdam- Viena', price: '4.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights06.jpg' },
    { id: 16, name: 'Berlin- Warsaw', price: '2.900.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights07.jpg' },
    { id: 17, name: 'New York - Paris', price: '5.200.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights08.jpg' },
    { id: 18, name: 'Riga- Prague', price: '3.740.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights09.jpg' },
    { id: 19, name: 'Abudabi - Zurich', price: '1.400.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights01.jpg' },
    { id: 20, name: 'Sydney - Berlin', price: '2.300.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights02.jpg' },
    { id: 21, name: 'Ankara - Munich', price: '2.250.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights03.jpg' },
    { id: 22, name: 'Zurich- Moscow', price: '1.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights04.jpg' },
    { id: 23, name: 'Boston- Tbilisi', price: '3.800.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights05.jpg' },
    { id: 24, name: 'Amsterdam- Viena', price: '4.700.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights06.jpg' },
    { id: 25, name: 'Berlin- Warsaw', price: '2.900.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights07.jpg' },
    { id: 26, name: 'New York - Paris', price: '5.200.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights08.jpg' },
    { id: 27, name: 'Riga- Prague', price: '3.740.000đ', image: 'https://demo.gridgum.com/templates/Travel-agency/images/flights09.jpg' },
  ]

  public customOptions: any = {
    margin: 0,
    loop: true,
    dots: false,
    center: false,
    items: 1,
    slideBy: 1,
    autoplay: true
  }

  constructor() { }

  city_select() {
    this.active_city_from = !this.active_city_from;
  }

  change_city_from(i) {
    this.vl_city_from = this.list_city[i].name;
    this.active_city_from = !this.active_city_from;
  }

  city_select_to() {
    this.active_city_to = !this.active_city_to;
  }

  change_city_to(i) {
    this.vl_city_to = this.list_city[i].name;
    this.active_city_to = !this.active_city_to;
  }

  next() {
    this.owlElement.next([200]);
  }

  prev() {
    this.owlElement.previous([200]);
  }

  ngOnInit() {
  }

}
