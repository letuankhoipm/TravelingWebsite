import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { PlaceService } from "@services/place.service";
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  providers: [SeoService, PlaceService]

})
export class PlaceComponent implements OnInit {

  alls: any;
  title;
  detail;
  state;
  places = [];

  @ViewChild('appOutlet') outlet: RouterOutlet;

  public packs = [
    {
      id: 1,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    },
    {
      id: 2,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    },
    {
      id: 3,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    },
    {
      id: 4,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    },
    {
      id: 5,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    }, {
      id: 6,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    }, {
      id: 7,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    }, {
      id: 8,
      title: 'Gói Du Lịch Vịnh Hạ Long',
      descrile: 'Ghé thăm các gói kỳ nghỉ giá rẻ, tour du lịch',
      dayPost: {
        day: '14',
        month: '4',
        year: '2019'
      }
      ,
      like: 0,
      comment: 0,
      image: 'https://exclusivesmedia.webjet.com.au/uploads/2017/10/9day-vietnam-5-min.jpg'
    },
  ];

  public listKind = [
    'Dài ngày',
    'Kì nghỉ'
  ];

  public page = 1;

  constructor(private router: Router, private seoService: SeoService, private placeService: PlaceService, private sharedService: SharedService) {
    this.alls = this.placeService.getAlls();
    sharedService.title.subscribe(title => {
      this.title = title;
    })
  }

  ngOnInit() {
    this.seoService.generateTags({
      title: 'Tour du lịch',
      description: 'Gói du lịch giá rẻ',
      slug: 'home',
      keywords: 'du lich mien tay'
    });
    if (this.alls) {
      this.alls.subscribe(places => {
        this.places = places;
      });
    }
  }

  ngAfterViewInit() {
    if(this.state) {
      this.state = this.outlet.activatedRouteData['routing'];
  }

  this.router.events
      .subscribe((event) => {
          if (event instanceof NavigationStart) {

          }
          else if (
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel
          ) {
              this.state = this.outlet.activatedRouteData['routing'];
          }
      });
  }

}
