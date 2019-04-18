import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss']
})
export class AddTourComponent implements OnInit {

  valueDayTime = [{ id: 1, name: '', time: [] }];
  valueOld = 1;
  valueOldNight = 1;
  datas: Observable<any[]>;
  data: any;
  totalTour: number;

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
    { name: 'sang', placeholder: 'Mô tả các hoạt động buổi sáng', last: false, id: 0 },
    { name: 'trua', placeholder: 'Mô tả các hoạt động buổi trưa', last: false, id: 1 },
    { name: 'chieu', placeholder: 'Mô tả các hoạt động buổi chiều', last: false, id: 2 },
    { name: 'toi', placeholder: 'Mô tả các hoạt động buổi tối', last: true, id: 3 },
  ];

  public listChilds = [1];
  // public listHotel = [1];

  public listServices = [
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
  arrNgay1 = [];

  public dataTour = {
    child: [],
    daytime: 2,
    eat: [],
    gift: [],
    guide: [],
    hotel: [],
    name: '',
    night: 2,
    note: '',
    pay: [],
    people: 15,
    price: 12500000,
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
    vehicle: ''
  };

  save() {
    this.dataTour.name = this.name;
    this.dataTour.vehicle = this.vehicle;
    this.dataTour.daytime = this.valueOld;
    this.dataTour.night = this.valueOldNight;
    this.dataTour.note = this.note;
    this.dataTour.people = this.people;
    this.dataTour.price = this.price;
    
    for (let i = 0; i < this.valueOld; i++) {
      
      this.dataTour.schedule[i].name = this.valueDayTime[i].name;
      this.dataTour.schedule[i].morning = this.valueDayTime[i].time[0];
      this.dataTour.schedule[i].noon = this.valueDayTime[i].time[1];
      this.dataTour.schedule[i].afternoon = this.valueDayTime[i].time[2];
      this.dataTour.schedule[i].night = this.valueDayTime[i].time[3];

      console.log(this.dataTour.schedule[i].name);
      


      // console.log(this.dataTour.schedule[0].name);
      // console.log('------');
      // console.log(this.valueDayTime[0].name);
      // if(i >= 1){
      //   console.log(this.dataTour.schedule[1].name);
      //   console.log('------');
      //   console.log(this.valueDayTime[1].name);
      // }
      // if(i >= 2){
      //   console.log(this.dataTour.schedule[2].name);
      //   console.log('------');
      //   console.log(this.valueDayTime[2].name);
      // }
      // if(i >= 3){
      //   console.log(this.dataTour.schedule[3].name);
      //   console.log('------');
      //   console.log(this.valueDayTime[3].name);
      // }
      // console.log('===================');
      
    }
    console.log(this.dataTour.schedule);
    // console.log(this.dataTour.schedule[0].name);
    // console.log(this.dataTour.schedule[1].name);
    // console.log(this.dataTour.schedule[2].name);

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
    console.log(this.dataTour);
    console.log(this.valueOld);
    
    // console.log(this.listServices[0].dataArr);

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
    // console.log(this.dataTour);
    this.valueOld = vl;
  }

  onDataNight(vl) {
    this.valueOldNight = vl;
  }


  getAll() {
    this.datas = this.db.collection('tour').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        return data;
      });
    }));
    return this.datas;
  }

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.getAll().subscribe(lists => {
      // console.log(lists[0][1]);
      // this.data = lists;
      // if (lists[0]) {
      //   this.data = lists;
      // }
      this.totalTour = ++lists.length;
      console.log(lists);
      console.log(lists.length);
      console.log(this.totalTour);

    });
    // console.log(this.data);
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

}
