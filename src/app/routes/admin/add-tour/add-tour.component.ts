import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { TourService } from '@services/tour.service';
import { ImageService } from '@services/image.service';

export interface TourL {
  child?: [];
  daytime?: number;
  eat?: [];
  gift?: [];
  guide?: [];
  hotel?: [];
  name?: string;
  night?: number;
  note?: string;
  pay?: [];
  people?: number;
  price?: number;
  protect?: [];
  schedule?: [
    {
      afternoon?: string;
      morning?: string,
      name?: string,
      night?: string,
      noon?: string
    }
  ];
  transport?: [];
  vehicle?: string;
}

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
  providers: [TourService, ImageService]
})
export class AddTourComponent implements OnInit {

  logo = 'assets/images/logo.png';
  userDoc: AngularFirestoreDocument<TourL>;

  valueDayTime = [{ id: 1, name: '', time: [] }];
  valueOld = 1;
  valueOldNight = 1;
  datas: Observable<any[]>;
  data: any;
  totalTour: number;
  okData: any = {};
  minHeightTextSchedule = 70;
  minHeightTextService = 40;
  placeholderService = 'Mô tả';
  listNameTour = [];
  checkExistNameUpload: boolean = false;
  checkExistNameUploadThumbnail: boolean = false;
  listImagesUpload: any;
  namePost: string = '';
  arrPaths = [];
  changeDom = 1;
  loop = [{}];

  public listDayTime = [
    { name: '1 Ngày', number: 1 },
    { name: '2 Ngày', number: 2 },
    { name: '3 Ngày', number: 3 },
    { name: '4 Ngày', number: 4 },
    { name: '5 Ngày', number: 5 },
    { name: '6 Ngày', number: 6 },
    { name: '7 Ngày', number: 7 },
    { name: '8 Ngày', number: 8 },
    { name: '9 Ngày', number: 9 },
    { name: '10 Ngày', number: 10 }
  ];

  public listNight = [
    { name: '1 Đêm', number: 1 },
    { name: '2 Đêm', number: 2 },
    { name: '3 Đêm', number: 3 },
    { name: '4 Đêm', number: 4 },
    { name: '5 Đêm', number: 5 },
    { name: '6 Đêm', number: 6 },
    { name: '7 Đêm', number: 7 },
    { name: '8 Đêm', number: 8 },
    { name: '9 Đêm', number: 9 },
    { name: '10 Đêm', number: 10 }
  ];

  public listDays = [
    { name: 'sang', placeholder: 'Mô tả các hoạt động buổi sáng', id: 0 },
    { name: 'trua', placeholder: 'Mô tả các hoạt động buổi trưa', id: 1 },
    { name: 'chieu', placeholder: 'Mô tả các hoạt động buổi chiều', id: 2 },
    { name: 'toi', placeholder: 'Mô tả các hoạt động buổi tối', id: 3 },
  ];

  public listChilds = [1];
  // public listHotel = [1];

  listServices = [
    {
      name: 'Phương Tiện', icon: 'fa-bus', listS: [1], id: 'transport', dataArr: ['']
    }, {
      name: 'Khách Sạn', icon: 'fa-hotel', listS: [1], id: 'hotel', dataArr: ['']
    }, {
      name: 'Ăn Uống', icon: 'fa-utensils-alt', listS: [1], id: 'eat', dataArr: ['']
    }, {
      name: 'Hướng Dẫn Viên', icon: 'fa-hiking', listS: [1], id: 'guide', dataArr: ['']
    }, {
      name: 'Bảo Hiểm', icon: 'fa-route-interstate', listS: [1], id: 'protect', dataArr: ['']
    }, {
      name: 'Quà Tặng', icon: 'fa-gift', listS: [1], id: 'gift', dataArr: ['']
    }
  ];

  public listPay = [
    {
      listS: [1], id: 'pay', dataArr: ['']
    }
  ];

  public listChild = [
    {
      name: 'Giá Vé Trẻ Em', icon: 'fa-child', listS: [1], id: 'child', dataArr: ['']
    }
  ];

  // Data

  dataSchedule = {
    afternoon: '',
    morning: '',
    name: '',
    night: '',
    noon: ''
  };

  name = '';
  vehicle = '';
  daytime = null;
  night = null;
  people = null;
  price = null;
  note = '';
  describe = '';

  dataTour: any = {
    child: [],
    daytime: null,
    describe: '',
    eat: [],
    gift: [],
    guide: [],
    hotel: [],
    name: '',
    night: null,
    note: '',
    pay: [],
    people: null,
    price: null,
    protect: [],
    schedule: [
      {
        afternoon: '',
        morning: '',
        name: '',
        night: '',
        noon: ''
      }
    ],
    transport: [],
    vehicle: '',
    images: {},
  };
  TourService: any;

  constructor(
    private tourService: TourService,
    private imageService: ImageService,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.tourService.getAlls().subscribe(lists => {
      console.log(lists);
      this.listNameTour = lists.map(obj => {
        return obj.id;
      });
    });

    this.imageService.getById('temp').subscribe(lists => {
      this.listImagesUpload = lists;
      console.log(this.listImagesUpload);
      this.arrPaths = [];

      for (const paths in this.listImagesUpload) {
        if (paths === 'thumbnail') { continue; }
        console.log(paths);
        const p = this.listImagesUpload[paths].map(x => x.path);
        this.arrPaths = [...this.arrPaths, ...p];
        this.arrPaths.push(this.listImagesUpload.thumbnail.path);
      }
    });
  }

  deleteImage(arr) {
    for (const value of arr) {
      var desertRef = this.storage.ref(value);
      desertRef.delete();
    }
    let arrSpace = {};
    this.db.doc(`images/temp`).set(arrSpace);
  }

  checkName() {
    const name = this.changeAlias(this.name);
    const found = this.listNameTour.find(function (element: string) {
      return element === name;
    });
    if (!found) {
      return false;
    } else {
      return true;
    }
  }

  checkNameUpload(vl) {
    this.checkExistNameUpload = vl;
  }

  checkNameUploadThumbnail(vl) {
    this.checkExistNameUploadThumbnail = vl;
  }

  save() {
    this.dataTour.name = this.name;
    this.dataTour.vehicle = this.vehicle;
    this.dataTour.daytime = this.valueOld;
    this.dataTour.night = this.valueOldNight;
    this.dataTour.note = this.note;
    this.dataTour.people = this.people;
    this.dataTour.price = this.price;
    this.dataTour.images = this.listImagesUpload;
    this.dataTour.describe = this.describe;

    for (let i = 0; i < this.valueOld; i++) {
      this.dataTour.schedule[i].name = this.valueDayTime[i].name;
    }

    for (let i = 0; i < 6; i++) {
      switch (i) {
        case 0:
          this.dataTour.transport = this.listServices[0].dataArr;
          break;
        case 1:
          this.dataTour.hotel = this.listServices[1].dataArr;
          break;
        case 2:
          this.dataTour.eat = this.listServices[2].dataArr;
          break;
        case 3:
          this.dataTour.guide = this.listServices[3].dataArr;
          break;
        case 4:
          this.dataTour.protect = this.listServices[4].dataArr;
          break;
        case 5:
          this.dataTour.gift = this.listServices[5].dataArr;
          break;
        default:
      }
    }
    this.dataTour.pay = this.listPay[0].dataArr;
    this.dataTour.child = this.listChild[0].dataArr;

    this.okData = this.dataTour;
    console.log(this.dataTour);

    this.tourService.setData(this.changeAlias(this.name), this.dataTour);
    this.namePost = this.changeAlias(this.name);
    let arrSpace = {};
    this.db.doc(`images/temp`).set(arrSpace);
    // this.deleteImage(this.arrPaths);
    this.valueOld = 1;
    this.changeDom = 2;
    this.name = '';
  }

  onData(vl) {
    this.valueDayTime = [];

    for (let i = 1; i <= vl; i++) {
      this.valueDayTime.push({ id: i, name: '', time: [] });
    }

    if (this.valueOld < vl) {
      for (let i = this.valueOld; i < vl; i++) {
        this.dataTour.schedule.push({
          afternoon: '',
          morning: '',
          name: '',
          night: '',
          noon: ''
        });
      }
    } else if (this.valueOld > vl) {
      for (let i = this.valueOld; i > vl; i--) {
        this.dataTour.schedule.splice(i - 1, 1);
      }
    }
    this.valueOld = vl;
  }

  onDataNight(vl) {
    this.valueOldNight = vl;
  }

  changeTextSchedule(stringOutput, ngay, buoi) {
    switch (buoi) {
      case 0:
        this.dataTour.schedule[ngay].morning = stringOutput;
        break;
      case 1:
        this.dataTour.schedule[ngay].noon = stringOutput;
        break;
      case 2:
        this.dataTour.schedule[ngay].afternoon = stringOutput;
        break;
      case 3:
        this.dataTour.schedule[ngay].night = stringOutput;
        break;
      default:
    }
  }

  changeTextServices(stringOutput, service, idArr) {
    this.listServices[service].dataArr[idArr] = stringOutput;
  }

  changeTextPay(stringOutput, service, idArr) {
    this.listPay[service].dataArr[idArr] = stringOutput;
  }

  changeTextChild(stringOutput, service, idArr) {
    this.listChild[service].dataArr[idArr] = stringOutput;
  }

  changeTextNote(stringOutput) {
    this.note = stringOutput;
  }

  addListServiceL(arr, name, arrData) {
    arr.push(arr[arr.length - 1] + 1);
    arrData.push('');
    switch (name) {
      case 0:
        this.listChild[0].listS = arr;
        break;
      case 1:
        this.listPay[0].listS = arr;
        break;
      default:
    }
  }

  deleteListServiceL(index, arr, name, arrData) {
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr.splice(i, 1);
        arrData.splice(i, 1);
      }
    }
    switch (name) {
      case 0:
        this.listChild[0].listS = arr;
        this.listChild[0].dataArr = arrData;
        break;
      case 1:
        this.listPay[0].listS = arr;
        this.listPay[0].dataArr = arrData;
        break;
      default:
    }
  }

  addListService(arr, name, arrData) {
    arr.push(arr[arr.length - 1] + 1);
    arrData.push('');
    switch (name) {
      case 0:
        this.listServices[0].listS = arr;
        break;
      case 1:
        this.listServices[1].listS = arr;
        break;
      case 3:
        this.listServices[3].listS = arr;
        break;
      case 4:
        this.listServices[4].listS = arr;
        break;
      case 5:
        this.listServices[5].listS = arr;
        break;
      default:
    }
  }

  deleteListService(index, arr, name, arrData) {
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr.splice(i, 1);
        arrData.splice(i, 1);
      }
    }
    switch (name) {
      case 0:
        this.listServices[0].listS = arr;
        this.listServices[0].dataArr = arrData;
        break;
      case 1:
        this.listServices[1].listS = arr;
        this.listServices[1].dataArr = arrData;
        break;
      case 2:
        this.listServices[2].listS = arr;
        this.listServices[2].dataArr = arrData;
        break;
      case 3:
        this.listServices[3].listS = arr;
        this.listServices[3].dataArr = arrData;
        break;
      case 4:
        this.listServices[4].listS = arr;
        this.listServices[4].dataArr = arrData;
        break;
      case 5:
        this.listServices[5].listS = arr;
        this.listServices[5].dataArr = arrData;
        break;
      default:
    }

    console.log(this.listServices[0].dataArr);

  }

  changeAlias(alias): string {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    str = str.replace(/ /g, '-');
    return str;
  }

}
