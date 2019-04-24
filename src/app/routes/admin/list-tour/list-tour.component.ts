import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TourService } from '@services/tour.service';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.scss'],
  providers: [TourService]
})
export class ListTourComponent implements OnInit {

  thumbImages = [];
  dataTours = [];
  pathImage: any;
  hihi = '<b><strike>Xin chào</strike>, đây là đoạn <font color="#cc0000">text</font></b>';


  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private tourService: TourService
  ) { }

  ngOnInit() {
    this.tourService.getAlls().subscribe(lists => {
      console.log(lists);
      this.dataTours = lists;
    });
  }

  deleteImage(path) {
    var desertRef = this.storage.ref(path);
    desertRef.delete();
  }

  deleteTour(id) {
    console.log(id);
    for (let value of this.dataTours) {
      if (id == value.id) {
        let arrPaths = [];

        for (const paths in value.images) {
          if (paths === 'thumbnail') { continue; }
          const p = value.images[paths].map(x => x.path);
          arrPaths = [...arrPaths, ...p];
          arrPaths.push(value.images.thumbnail.path);
        }
        for (let value of arrPaths) {
          this.deleteImage(value);
        }
        this.tourService.deleteById(id);
        console.log(arrPaths);
        break;
      }
    }
    // console.log(this.pathImage);
    // for (const value of this.pathImage) {
    //   let arrTemp: any;
    //   if (value['id-tour'] == id) {
    //     arrTemp = value;
    //     let arrPaths = [];
    //     for (const paths in value) {
    //       if (paths === 'thumb' || paths === 'id-tour') {continue;}
    //       const p = value[paths].map(x => x.part);
    //       arrPaths = [...arrPaths, ...p];
    //     }
    //     for (const listPaths of arrPaths) {
    //       this.deleteImage(listPaths);
    //     }
    //     this.deleteImage(arrTemp.thumb.path);
    //     break;
    //   }
    //   this.db.doc<any>(`images/${id}`).delete();
    //   this.db.doc<any>(`tour/${id}`).delete();
    // }
    // const ara = Array.of(this.pathImage[id]);
    // console.log(ara);
    // this.pathImage[id].splice(this.pathImage[id].length, 1);
    // console.log(this.pathImage[id]);
    // let arrPaths = [];
    // for (let paths in this.pathImage[id - 1]) {
    //   if(paths === 'thumb') continue;
    //   const p =  this.pathImage[id - 1][paths].map(x => x.part);
    //   arrPaths = [...arrPaths, ... p];
    // }
    // console.log(arrPaths);
  }
}
