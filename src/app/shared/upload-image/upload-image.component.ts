import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Input() value: number;
  @Input() totalTour: number;

  isHovering: boolean;
  datas: Observable<any[]>;
  dataTests: any;
  dataImage: any;
  // id = 1;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
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

  deleteImage(path) {
    for (var i = 0; i < this.dataTests[this.value].length; i++) {
      if (this.dataTests[this.value][i].part == path) {
        this.dataTests[this.value].splice(i, 1);
      }
    };
    var desertRef = this.storage.ref(path);
    desertRef.delete();
    this.db.doc(`images/${this.totalTour}`).set(this.dataTests);
  }

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.getAll().subscribe(lists => {
      if (lists[this.totalTour]) {
        this.dataTests = lists[this.totalTour];
        this.dataImage = lists[this.totalTour][this.value];
      }
    });
  }

}
