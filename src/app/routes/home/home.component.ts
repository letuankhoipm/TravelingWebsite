import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { HomeService } from '@services/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SeoService, HomeService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public happyDescribe = `Bạn biết đấy, tuổi trẻ và sự tự do không thể kéo dài mãi mãi, chính vì thế, độ tuổi 20 chính là thời điểm lý tưởng để dấn thân vào những cuộc phiêu lưu và những chuyến đi tới các vùng đất xa xôi. Bạn sẽ đúc kết được vô số kinh nghiệm và những trải nghiệm đáng nhớ tại nhiều nơi hoang dã mà suốt đời bạn sẽ không thể quên. Hãy xem những gợi ý điểm đến trước khi tuổi 30 tới nhé!`;
  public contentTemp = 'Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản.';
  public parallaxContent = 'Là thị trấn nằm ở tỉnh Bà Rịa - Vũng Tàu, cách thành phố Vũng Tàu 12km, Long Hải được thiên nhiên ưu ái ban tặng nhiều cảnh đẹp thơ mộng của núi, của biển và của rừng hoa anh đào sắp trổ bông. Và để có một ngày nghỉ đầy thư giãn thì du khách hãy nhanh tay mua ngay tour du lịch Long Hải để được hòa mình cùng với biển cả, để ngắm nhìn bình minh dần hiện lên trên biển hay hoàng hôn khuất dần trầm mình xuống mặt biển mênh mông.';

  public partnerImagesUrl = [
    { origin: 'assets/images/partners/partner1.jpg', hover: 'assets/images/partners/partner1_hover.jpg' },
    { origin: 'assets/images/partners/partner2.jpg', hover: 'assets/images/partners/partner2_hover.jpg' },
    { origin: 'assets/images/partners/partner3.jpg', hover: 'assets/images/partners/partner3_hover.jpg' },
    { origin: 'assets/images/partners/partner4.jpg', hover: 'assets/images/partners/partner4_hover.jpg' },
    { origin: 'assets/images/partners/partner5.jpg', hover: 'assets/images/partners/partner5_hover.jpg' },
    { origin: 'assets/images/partners/partner6.jpg', hover: 'assets/images/partners/partner6_hover.jpg' }
  ];

  homes = [];

  public happyPlace = [
    { name: 'Paris', percent: 93 },
    { name: 'London', percent: 83 },
    { name: 'Hồ Chí Minh', percent: 65 },
    { name: 'Đà Nẵng', percent: 72 }
  ];

  public places = [
    {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
    }, {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
    }, {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
    }, {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
    }, {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
    }, {
      destination: 'Bahamas', duration: 'Tour 7 Ngày', review: '168 Lượt đánh giá', infor: 'Thiên đường Trung đông', image: 'assets/images/pp.jpg', currentRate: 3,
      describe: this.contentTemp
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

  constructor(private seoService: SeoService, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.seoService.generateTags({
      title: 'Tour du lịch',
      description: 'Tour du lịch dài và ngắn hạn',
      slug: 'home',
      keywords: 'du lich mien tay'
    });

    this.homeService.getAlls().subscribe(homes => {
      this.homes = homes;
    })
  }
}