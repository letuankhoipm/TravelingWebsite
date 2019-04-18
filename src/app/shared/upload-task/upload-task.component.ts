import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Observer } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';
// import * as firebase from 'firebase';

export interface Links {
  id?: string;
  link?: string;
  part?: number;
}

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  @Input() value: number;
  @Input() totalTour: number;

  listLink: any;
  // id = 1;
  datas: Observable<any[]>;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;
  pathImage;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.getAll().subscribe(lists => {
      console.log(lists);
      if(lists[this.totalTour]){
        this.listLink = lists[this.totalTour];
      }else{
        this.listLink = {};
      }
      if (this.listLink[1] == undefined) {
        console.log('Null');
        this.listLink[1] = [];
        this.listLink[2] = [];
        this.listLink[3] = [];
        this.listLink[4] = [];
      }
      // console.log(this.listOld[0].data);
      // localStorage.setItem('data', JSON.stringify(this.listOld[0].data));
      // this.totalFilm = lists[0].list.total;
      // this.getDataLocal = JSON.parse(localStorage.data);
      console.log(this.listLink);
    });
    this.startUpload();
    // this.deleteImage();
  }

  deleteImage(path) {
    var desertRef = this.storage.ref(path);
    desertRef.delete();
  }

  getAll() {
    this.datas = this.db.collection('images').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as any;
        return data;
      });
    }));
    return this.datas;
  }

  startUpload() {

    // The storage path
    const path = `images/${this.totalTour}/${Date.now()}_${this.file.name}`;
    this.pathImage = path;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        let creLink = { link: this.downloadURL, part: path };
        this.listLink[this.value].push(creLink);
        console.log(this.listLink);

        // let userDoc = this.db.doc(`images/${this.id}`);
        this.db.doc(`images/${this.totalTour}`).set(this.listLink);
      }),
    );

    // this.pushUpload(path, this.file);
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
