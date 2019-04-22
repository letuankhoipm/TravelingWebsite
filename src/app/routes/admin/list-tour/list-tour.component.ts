import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.scss']
})
export class ListTourComponent implements OnInit {

  thumbImages = [];
  dataTours = [];
  pathImage: any;
  hihi = '<b><strike>Xin chào</strike>, đây là đoạn <font color="#cc0000">text</font></b>';

  getTour() {
    let dataTours: Observable<any[]>;
    dataTours = this.db.collection('tour').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return dataTours;
  }

  getImage() {
    let dataImages: Observable<any[]>;
    dataImages = this.db.collection('images').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        return data;
      });
    }));
    return dataImages;
  }

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.getImage().subscribe(lists => {
      this.pathImage = lists;
      console.log(this.pathImage);
      for (const value of lists) {
        this.thumbImages.push(value.thumb.link);
      }
      console.log(this.thumbImages);
    });
    this.getTour().subscribe(lists => {
      for (const value of lists) {
        this.dataTours.push({ name: value.name, price: value.price, people: value.people, id: value.id });
      }
      console.log(this.dataTours);
    });
  }

  deleteImage(path) {
    var desertRef = this.storage.ref(path);
    desertRef.delete();
    // this.db.doc(`images/${this.totalTour}`).set(this.dataTests);
  }

  deleteTour(id) {
    console.log(this.pathImage);
    for (const value of this.pathImage) {
      let arrTemp: any;
      if (value['id-tour'] == id) {
        arrTemp = value;
        let arrPaths = [];
        for (const paths in value) {
          if (paths === 'thumb' || paths === 'id-tour') {continue;}
          const p = value[paths].map(x => x.part);
          arrPaths = [...arrPaths, ...p];
        }
        for (const listPaths of arrPaths) {
          this.deleteImage(listPaths);
        }
        this.deleteImage(arrTemp.thumb.path);
        break;
      }
      this.db.doc<any>(`images/${id}`).delete();
      this.db.doc<any>(`tour/${id}`).delete();
    }
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
