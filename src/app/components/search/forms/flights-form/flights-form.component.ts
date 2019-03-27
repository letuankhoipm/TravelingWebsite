import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['../forms.component.scss', './flights-form.component.scss']
})
export class FlightsFormComponent implements OnInit {

  public listCity = [
    { name: 'Hồ Chí Minh' },
    { name: 'Hà Nội' },
    { name: 'Đà Nẵng' },
    { name: 'Cần Thơ' },
    { name: 'Hải Phòng' },
    { name: 'Bình Định' },
    { name: 'Buôn Ma Thuột' },
    { name: 'Cà Mau' },
    { name: 'Đà Lạt' },
    { name: 'Điện Biên' },
    { name: 'Đồng Hới' },
    { name: 'Huế' },
    { name: 'Nghệ An' },
    { name: 'Nha Trang' },
    { name: 'Phú Quốc' },
    { name: 'Phú Yên' },
    { name: 'Pleiku' },
    { name: 'Quảng Nam' },
    { name: 'Rạch Giá' },
    { name: 'Sơn La' },
    { name: 'Thanh Hóa' },
    { name: 'Vũng Tàu' }
  ];

  public numberList = [];


  constructor() {
    for (let i = 0; i < 10; i++) {
      this.numberList[i] = { name: i + 1 };
    }
  }

  ngOnInit() {
  }


}
