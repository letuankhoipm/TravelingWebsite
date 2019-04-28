import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { TourService } from '@services/tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.scss'],
  providers: [TourService],
  encapsulation: ViewEncapsulation.None
})
export class ListTourComponent implements OnInit {

  thumbImages = [];
  dataTours = [];
  pathImage: any;
  idDelete: string = '';


  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private tourService: TourService
  ) {
    const settings: firebase.firestore.Settings = {
      timestampsInSnapshots: true,
    };
    this.db.firestore.settings(settings);
  }

  ngOnInit() {
    this.tourService.getAlls().subscribe(lists => {
      this.dataTours = lists;
    });
  }

  getIdDeleteTour(idTour) {
    this.idDelete = idTour;
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
