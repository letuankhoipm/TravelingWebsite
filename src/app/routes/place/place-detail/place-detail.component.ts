import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, share, tap } from 'rxjs/operators';
import { SeoService } from '@services/seo.service';
import { TourService } from '@services/tour.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
  providers: [TourService, SeoService]

})
export class PlaceDetailComponent implements OnInit {
  tours = [];
  tour$: Observable<any>;
  tour: any;
  id: any;
  images: any;

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute,
    private seoService: SeoService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != 'create') {
        this.id = params['id'];

        this.tour$ = this.tourService.getById(this.id)
          .pipe(
            tap(x=> console.log(x))
          );
        this.tour$.subscribe((tour) => {
          this.tour = tour;
          this.tour.images = this.objectToArray(tour.images);
        });

        this.tour$.subscribe(tour => {
          this.seoService.generateTags({
            title: tour.name,
            description: tour.name,
            slug: this.id,
            keywords: this.change_alias(tour.name)
          });
        });

      }
    });
    this.tourService.getAlls().subscribe(tours => {

      this.tours = tours;
    });
  }

  private change_alias(alias) {
    let str = alias;
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

  private objectToArray(obj) {
    const arr = [];
    for (const day in obj) {
      if (day === 'thumbnail') {
        continue;
      }
      arr.push(obj[day]);
    }
    return arr;
  }

}
