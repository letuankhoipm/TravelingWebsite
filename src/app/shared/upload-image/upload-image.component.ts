import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ImageService } from '@services/image.service';
import { FirestoreSettingsToken} from '@angular/fire/firestore';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./upload-image.component.scss'],
  providers: [ImageService, { provide: FirestoreSettingsToken, useValue: {} }]
})
export class UploadImageComponent implements OnInit {

  @Input() value: number;
  @Input() totalTour: number;
  @Input() valueOld: number;

  isHovering: boolean;
  datas: Observable<any[]>;
  dataTests: any;
  dataImage: any;
  idInterval: any;
  Filetotal: number = 0;
  listLink: any;
  // id = 1;

  files: File[] = [];
  list_links = new Array<any>();

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      this.Filetotal += 1;
    }
    this.CheckDone();
  }

  hoho() {
  }

  CheckDone() {
    this.idInterval = setInterval(() => {
      if (this.list_links.length === this.Filetotal) {
        for (let value of this.list_links) {
          this.listLink[this.value].push(value);
        }
        this.list_links = [];
        this.Filetotal = 0;
        this.db.doc(`images/temp`).set(this.listLink);
        clearInterval(this.idInterval);
      }
    }, 100);
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

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private imageService: ImageService) { 
  }

  // ngAfterViewInit() {
  //   // console.log(this.totalTour);
  // }

  ngOnInit() {
    console.log(this.imageService.getById('temp'));

    // this.imageService.getAlls().subscribe(lists => {
      // const totalTru = this.totalTour - 1;
      // let total = this.totalTour;
      // if (lists[0]) {
      //   this.listLink = lists[0];
      // } else {
      //   this.listLink = {};
      // }
      // if (this.listLink[0] == undefined) {
      //   for (let index = 0; index < this.valueOld; index++) {
      //     this.listLink[index] = [];
      //   }
        // this.listLink.thumb = {link: 'https://firebasestorage.googleapis.com/v0/b/phuongbinhtour.appspot.com/o/images%2F2%2Fthumb.jpg?alt=media&token=12efaacd-ac9e-4125-bc47-db6c008339f4', path: 'images/5/1.jpg'};
        // this.listLink.id = 1;
    //   }
    // });


    // this.imageService.getAlls().subscribe(lists => {
    //   const totalTru = this.totalTour - 1;
    //   if (lists[totalTru]) {
    //     // this.dataTests = lists[this.totalTour];
    //     this.dataImage = lists[totalTru][this.value];
    //   }
    // });
    // console.log(this.dataImage);
  }

}
