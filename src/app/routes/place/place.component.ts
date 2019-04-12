import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  public packs = [
    { id: 1,
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
    { id: 2,
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
    { id: 3,
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
    { id: 4,
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
    { id: 5,
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
    }, { id: 6,
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
    }, { id: 7,
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
    }, { id: 8,
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

  constructor() { }

  ngOnInit() {
  }

}
