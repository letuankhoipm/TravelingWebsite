import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { SeoService } from '@services/seo.service';
import { HomeService } from '@services/home.service';
import { Observable } from 'rxjs';
import { TourService } from '@services/tour.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SeoService, HomeService, TourService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public happyDescribe = `Bạn biết đấy, tuổi trẻ và sự tự do không thể kéo dài mãi mãi, chính vì thế, độ tuổi 20 chính là thời điểm lý tưởng để dấn thân vào những cuộc phiêu lưu và những chuyến đi tới các vùng đất xa xôi. Bạn sẽ đúc kết được vô số kinh nghiệm và những trải nghiệm đáng nhớ tại nhiều nơi hoang dã mà suốt đời bạn sẽ không thể quên. Hãy xem những gợi ý điểm đến trước khi tuổi 30 tới nhé!`;
  public contentTemp1 = 'Tiền nhiều để làm gì,hay đi du lịch ngay khi chúng ta còn có thể, thanh xuân là đi đây đi đó để không hối tiếc tuổi trẻ của mình.';
  public parallaxContent = 'Là thị trấn nằm ở tỉnh Bà Rịa - Vũng Tàu, cách thành phố Vũng Tàu 12km, Long Hải được thiên nhiên ưu ái ban tặng nhiều cảnh đẹp thơ mộng của núi, của biển và của rừng hoa anh đào sắp trổ bông. Và để có một ngày nghỉ đầy thư giãn thì du khách hãy nhanh tay mua ngay tour du lịch Long Hải để được hòa mình cùng với biển cả, để ngắm nhìn bình minh dần hiện lên trên biển hay hoàng hôn khuất dần trầm mình xuống mặt biển mênh mông.';
  public tip = 'Một công ty muốn phát triển thì dịch vụ phải luôn đi đầu, vì vậy chúng tôi luôn luôn đề cao chất lượng phục vụ để mang tới quý khách hàng những trải nghiệm tốt nhất.';
  public tip1 = 'Khao khát cháy bỏng được đi du lịch trong mùa hè này, nhưng không biết nên bắt đầu từ đâu hoặc làm thế nào để chuyến đi chơi thực sự thú vị và ấn tượng.';
  public tip2 = 'Du lịch khám phá là khái niệm khá mới mẻ ở Việt Nam nhưng rất phổ biến trên toàn thế giới.';
  public tip3 = 'Bạn chỉ việc gửi cho chúng tôi những gì bạn muốn, việc còn lại hãy để chúng tôi lo, liên hệ ngay để được tư vấn về những chuyến đi tuyệt vời.';
  public tip4 = 'Hệ thống chăm sóc khách hàng luôn hoạt động 24/7 sẵn sàng phản hồi bất cứ khi nào quý khách có thắc mắc.';

  tourList$: Observable<any>;


  @ViewChild('background') bgContainer: ElementRef;

  public partnerImagesUrl = [
    { origin: 'assets/images/partners/partner1.jpg', hover: 'assets/images/partners/partner1_hover.jpg' },
    { origin: 'assets/images/partners/partner2.jpg', hover: 'assets/images/partners/partner2_hover.jpg' },
    { origin: 'assets/images/partners/partner3.jpg', hover: 'assets/images/partners/partner3_hover.jpg' },
    { origin: 'assets/images/partners/partner4.jpg', hover: 'assets/images/partners/partner4_hover.jpg' },
    { origin: 'assets/images/partners/partner5.jpg', hover: 'assets/images/partners/partner5_hover.jpg' },
    { origin: 'assets/images/partners/partner6.jpg', hover: 'assets/images/partners/partner6_hover.jpg' }
  ];

  alls: any;
  homes = [];

  public happyPlace = [
    { name: 'Phú Quốc', percent: 93 },
    { name: 'Vũng Tàu', percent: 83 },
    { name: 'Cần Thơ', percent: 65 },
    { name: 'Đà Nẵng', percent: 72 }
  ];

  public tours: any[];

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
  };


  constructor(private seoService: SeoService, private homeService: HomeService, private tourService: TourService) {
    this.alls = this.homeService.getAlls();
  }

  ngOnInit() {

    this.tourService.getTour().subscribe(tours => {

      const sluck = (data: any) => {
        const temp = {
          id: data.id,
          name: data.name,
          describe: data.describe,
          daytime: data.daytime,
          image: data.images.thumbnail.link
        }
        return temp;
      }
      this.tours = tours.map(sluck);
    });

    if (this.alls) {
      this.alls.subscribe(homes => {
        this.homes = homes;
        const home = homes[0];
        this.seoService.generateTags({
          title: home.title,
          description: home.description,
          slug: home.slug,
          keywords: home.keywords
        });

      });
    }



    const bg = new Image();
    bg.src = '/assets/images/background-beach-2.png';
    bg.onload = () => {
      this.bgContainer.nativeElement.setAttribute("style", "background-image: url(" + bg.src + ');');
    };
  }
}

