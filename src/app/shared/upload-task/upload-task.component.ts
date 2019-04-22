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
  @Input() valueOld: number;
  @Input() list_link: Array<any>;

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
    this.startUpload();
  }

  deleteImage(path) {
    let desertRef = this.storage.ref(path);
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
    const path = `images/1/${Date.now()}_${this.file.name}`;
    this.pathImage = path;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.list_link.push({ link: this.downloadURL, part: path });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
