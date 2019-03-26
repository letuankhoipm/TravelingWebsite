import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  active_city_from = false;
  list_city = [
    {id: 1, name: 'Hồ Chí Minh'},
    {id: 2, name: 'Hà Nội'},
    {id: 3, name: 'Đà Nẵng'},
    {id: 4, name: 'Cần Thơ'},
    {id: 5, name: 'Hải Phòng'},
    {id: 6, name: 'Bình Định'},
    {id: 7, name: 'Buôn Ma Thuột'},
    {id: 8, name: 'Cà Mau'},
    {id: 9, name: 'Đà Lạt'},
    {id: 10, name: 'Điện Biên'},
    {id: 11, name: 'Đồng Hới'},
    {id: 12, name: 'Huế'},
    {id: 13, name: 'Nghệ An'},
    {id: 14, name: 'Nha Trang'},
    {id: 15, name: 'Phú Quốc'},
    {id: 16, name: 'Phú Yên'},
    {id: 17, name: 'Pleiku'},
    {id: 18, name: 'Quảng Nam'},
    {id: 19, name: 'Rạch Giá'},
    {id: 20, name: 'Sơn La'},
    {id: 21, name: 'Thanh Hóa'},
    {id: 22, name: 'Vũng Tàu'}
  ]
  vl_city_from: string = 'Thành Phố';

  active_city_to = false;
  vl_city_to: string = 'Thành Phố';

  constructor() { }

  city_select(){
    this.active_city_from = !this.active_city_from;
  }

  change_city_from(i){
    this.vl_city_from = this.list_city[i].name;
    this.active_city_from = !this.active_city_from;
  }

  city_select_to(){
    this.active_city_to = !this.active_city_to;
  }

  change_city_to(i){
    this.vl_city_to = this.list_city[i].name;
    this.active_city_to = !this.active_city_to;
  }

  ngOnInit() {
  }

}
