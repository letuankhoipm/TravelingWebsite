import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, share } from 'rxjs/operators';
import { SeoService } from '@services/seo.service';
import { TourService } from '@services/tour.service';
import { Observable } from 'rxjs';
import { UpdateContactService } from '@services/update-contact.service';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
  providers: [TourService, SeoService],
  encapsulation: ViewEncapsulation.None

})
export class PlaceDetailComponent implements OnInit {
  tours = [];
  tourDemo: any;
  tour$: Observable<any>;
  tour: any;
  id: any;
  images: any;

  constructor(
    private tourService: TourService,
    private router: Router,
    private route: ActivatedRoute,
    private seoService: SeoService,
    private storageService: StorageService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != 'create') {
        this.id = params['id'];

        this.tour$ = this.tourService.getById(this.id).pipe(share());
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
    // this.tourService.getAlls().subscribe(tours => {
    //   this.tours = tours;
    // });
    this.tourService.getAlls().subscribe(tours => {

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
      this.tourDemo = this.tours[0];
      this.tours = this.tours.slice(0, 5);
      console.log(this.tours);
      console.log(this.tourDemo);
      
      
    });

  }

  public sendDestination() {

    this.router.navigate(['/contact/']);
    this.storageService.setValue('tourName', this.tour.name);
  }

  private change_alias(alias: string) {
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
