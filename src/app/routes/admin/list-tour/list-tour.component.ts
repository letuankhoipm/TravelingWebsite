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
      this.dataTours = lists;
    });
  }

  deleteImage(path) {
    var desertRef = this.storage.ref(path);
    desertRef.delete();
  }

  deleteTour(id) {
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
        break;
      }
    }
  }
}
