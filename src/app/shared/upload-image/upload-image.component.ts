import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./upload-image.component.scss'],
  providers: [ImageService]
})
export class UploadImageComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() valueOld: number;
  @Input() nameTour: any;
  @Output() checkNameUpload = new EventEmitter<boolean>();

  isHovering: boolean;
  datas: Observable<any[]>;
  dataTests: any;
  dataImage: any;
  idInterval: any;
  Filetotal: number = 0;
  listLink = [];
  // id = 1;

  files: File[] = [];
  list_links = new Array<any>();
  checkFalse = false;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    if (this.nameTour !== '') {
      this.checkNameUpload.emit(false);
      for (let i = 0; i < files.length; i++) {
        this.files.push(files.item(i));
        this.Filetotal += 1;
      }
      this.CheckDone();
    } else {
      this.checkNameUpload.emit(true);
    }
  }

  CheckDone() {
    this.idInterval = setInterval(() => {
      if (this.list_links.length === this.Filetotal) {
        console.log(this.list_links);
        for (const value_link of this.list_links) {
          this.listLink['ngay' + this.value].push(value_link);
        }
        this.list_links = [];
        this.Filetotal = 0;
        this.db.doc(`images/temp`).set(this.listLink);
        clearInterval(this.idInterval);
      }
    }, 100);
  }

  deleteImage(path) {
    for (var i = 0; i < this.listLink['ngay' + this.value].length; i++) {
      if (this.listLink['ngay' + this.value][i].path == path) {
        this.listLink['ngay' + this.value].splice(i, 1);
      }
    };
    var desertRef = this.storage.ref(path);
    desertRef.delete();
    this.db.doc(`images/temp`).set(this.listLink);
  }

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private imageService: ImageService) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {

    this.imageService.getById('temp').subscribe(lists => {
      this.listLink = lists;
      if (this.listLink['thumbnail'] == undefined) {
        this.listLink['thumbnail'] = {};
      }

      for (let index = 1; index <= this.valueOld; index++) {
        if (this.listLink['ngay' + index] == undefined) {
          this.listLink['ngay' + index] = [];
        }
      }
      for (let index = this.valueOld + 1; index <= 10; index++) {
        if (this.listLink['ngay' + index] != undefined) {
          delete this.listLink['ngay' + index];
        }
      }
      console.log(this.listLink);
    });


    this.imageService.getById('temp').subscribe(lists => {
      if (lists['ngay' + this.value]) {
        this.dataImage = lists['ngay' + this.value];
      }
    });
  }

  getValue() {
    console.log(this.value);
  }

}
