import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationCancel, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { PlaceService } from "@services/place.service";
import { SharedService } from '@services/shared.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourService } from '@services/tour.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [SeoService, PlaceService, TourService]

})
export class PlaceComponent implements OnInit {

  placeData: any;
  title;
  detail;
  state;
  places = [];
  tourList$: Observable<any>;

  @ViewChild('appOutlet') outlet: RouterOutlet;

  public packs: any[];

  // public packs = [
  //   {
  //     id: 1,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   },
  //   {
  //     id: 4,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   },
  //   {
  //     id: 5,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   }, {
  //     id: 6,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   }, {
  //     id: 7,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   }, {
  //     id: 8,
  //     title: 'Gói Du Lịch Vịnh Hạ Long',
  //     descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
  //     dayPost: {
  //       day: '14',
  //       month: '4',
  //       year: '2019'
  //     }
  //     ,
  //     like: 0,
  //     comment: 0,
  //     image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
  //   },
  // ];

  public listKind = [
    'Dài ngày',
    'Kì nghỉ'
  ];

  public page = 1;

  constructor(
    private seoService: SeoService,
    private tourService: TourService,
    private placeService: PlaceService,
    private sharedService: SharedService,
  ) {


    this.placeData = this.placeService.getAlls();
    this.sharedService.title.subscribe(title => {
      this.title = title;
    });

    this.tourList$ = this.tourService.getAlls();
  }

  ngOnInit() {
    if (this.placeData) {
      this.placeData.subscribe(places => {
        this.places = places;
        let place = places[0];
        this.seoService.generateTags({
          title: place.title,
          description: place.description,
          slug: place.slug,
          keywords: place.keywords
        });
      });
    }
    // lay cac thuoc tinhs cua database truyen vao list
    if (this.tourList$) {
      this.tourList$
        .pipe(
          map((arrayData: any[]) => {
            return arrayData.map((data) => {
              console.log(data);
              return {
                id: data.id,
                title: data.name,
                description: data.describe,
                image: data.images.thumbnail.link,
                people: data.people,
                price: data.price
              };
            });
          })
        ).subscribe((arrayData: any[]) => {
          this.packs = arrayData;
          console.log(this.packs);
        });
    }


  }

  ngAfterViewInit() {
    //   if(this.state) {
    //     this.state = this.outlet.activatedRouteData['routing'];
    // }

    // this.router.events
    //     .subscribe((event) => {
    //         if (event instanceof NavigationStart) {

    //         }
    //         else if (
    //             event instanceof NavigationEnd ||
    //             event instanceof NavigationCancel
    //         ) {
    //             this.state = this.outlet.activatedRouteData['routing'];
    //         }
    //     });
  }

}
