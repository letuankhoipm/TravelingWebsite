import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public logo = '/assets/images/logo_final.png';

  public phuongbinh = {
    infor: 'Mọi chi tiết vui lòng liên lạc với Công ty Trách nhiệm hữu hạn Thương Mại và Du Lịch & Vận Tải Phương Bình Tourist',
    address: '112/52/9, Hoàng Quốc VIệt, phường An BÌnh, quận Ninh Kiều, thành phố Cần Thơ.',
    office: 'Khuôn viên Bình Phó A, phường Long Tuyền, quận Bình Thuỷ, thành phố Cần Thơ.',
    phone: '0909 372 319'
  }

  constructor() { }

  ngOnInit() {
  }

}
