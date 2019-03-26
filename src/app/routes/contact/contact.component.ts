import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public phuongbinh = {
    infor: 'Mọi chi tiết vui lòng liên lạc với Công ty Trách nhiệm hữu hạn Thương Mại và Du Lịch & Vận Tải Phương Bình Tourist',
    address: '112/52/9, Hoàng Quốc VIệt, phường An BÌnh, quận Ninh Kiều, thành phố Cần Thơ.',
    office: 'Khuôn viên Bình Phó A, phường Long Tuyền, quận Bình Thuỷ, thành phố Cần Thơ.',
    phone: '0909 372 319'
  } 

  fullname = '';
  email = '';
  number: number;
  message = '';
  
  constructor() { }

  ngOnInit() {
  }

}
