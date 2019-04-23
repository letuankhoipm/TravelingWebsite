import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FakeTourService } from '@services/tour.fake.service';
import { map } from 'rxjs/operators';
import { SeoService } from '@services/seo.service';
import { TourService } from '@services/tour.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
  providers: [TourService, FakeTourService, SeoService]

})
export class PlaceDetailComponent implements OnInit {
  placeFakeData: any;
  // tour = [];
  tour: any;
  id: any;
  images: any;

  constructor(private tourService: TourService, private route: ActivatedRoute,
    private fakeTourService: FakeTourService,
    private seoService: SeoService) {
      this.placeFakeData = this.fakeTourService.getAlls();
  }

  ngOnInit() {
    // get id
    // this.activatedRoute.params.subscribe((params) => {
    //   this.fakeTourService.getById(params['id'])
    //     .pipe(
    //       map((data) => this.change_alias(data.name))
    //     )
    //     .subscribe((x) => console.log(x));
    // });
    // duc viet
    this.route.params.subscribe(params => {
      if (params['id'] != 'create') {
          this.id = params['id'];
          console.log(this.id);

          this.tourService.getTourbyID("tour", this.id).subscribe(tour => {
            this.tour = tour;
            console.log(this.tour);           
            this.seoService.generateTags({
              title: tour.name,
              description: tour.gift,
              slug: this.id,
              keywords: tour.keywords
            });
          })

          this.tourService.getTourbyID("images", this.id).subscribe(images => {
              this.images = images;
              console.log(this.images);

          })
      }
  });
  }

  private change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
  }


}
