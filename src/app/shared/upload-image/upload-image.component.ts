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
  @Input() dataImagesCheck: any;
  @Output() checkNameUpload = new EventEmitter<boolean>();
  @Output() getArrClear = new EventEmitter<any>();

  isHovering: boolean;
  datas: Observable<any[]>;
  dataTests: any;
  dataImage: any;
  idInterval: any;
  Filetotal: number = 0;
  listLink = [];
  changeLinkTemp = '';
  // id = 1;

  files: File[] = [];
  list_links = new Array<any>();
  checkFalse = false;
  dataImageClear = [];


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
        for (const value_link of this.list_links) {
          this.listLink['ngay' + this.value].push(value_link);
        }
        this.list_links = [];
        this.Filetotal = 0;
        this.db.doc(`images/temp${this.changeLinkTemp}`).set(this.listLink);
        clearInterval(this.idInterval);
      }
    }, 100);
  }

  deleteImage(path) {

    const checkObjEmpty = Object.entries(this.dataImagesCheck).length === 0 && this.dataImagesCheck.constructor === Object;
    for (var i = 0; i < this.listLink['ngay' + this.value].length; i++) {
      if (this.listLink['ngay' + this.value][i].path == path) {
        if (!checkObjEmpty) {
          this.dataImageClear.push(this.listLink['ngay' + this.value][i]);
          this.getArrClear.emit(this.dataImageClear);
          for (let i = 0; i < this.dataImage.length; i++) {
            for (let value of this.dataImageClear) {
              if (value.path === this.dataImage[i].path) {
                this.dataImage.splice(i, 1);
              }
            }
          }
        }
        this.listLink['ngay' + this.value].splice(i, 1);
      }
    }

    if (checkObjEmpty) {
      var desertRef = this.storage.ref(path);
      desertRef.delete();
      this.db.doc(`images/temp${this.changeLinkTemp}`).set(this.listLink);
    }

  }

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private imageService: ImageService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(this.dataImagesCheck);
    if (this.dataImagesCheck == null) {
      this.dataImagesCheck = {};
      console.log('NULL');
    }

    
    if (this.dataImagesCheck.thumbnail) {
      this.changeLinkTemp = 'edit';
    }

    this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
      this.listLink = lists;
      let checkObjEmpty = Object.entries(this.listLink['thumbnail']).length === 0 && this.listLink['thumbnail'].constructor === Object;
      if (checkObjEmpty) {
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
    });


    this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
      let checkArrEmpty = typeof lists['ngay' + this.value] === 'undefined';
      if (!checkArrEmpty) {
        this.dataImage = lists['ngay' + this.value];
      }
    });
  }

  ngOnInit() {

    this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
      this.listLink = lists;
      let checkObjEmpty = Object.entries(this.listLink['thumbnail']).length === 0 && this.listLink['thumbnail'].constructor === Object;
      if (checkObjEmpty) {
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
    });


    this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
      let checkArrEmpty = typeof lists['ngay' + this.value] === 'undefined';
      if (!checkArrEmpty) {
        this.dataImage = lists['ngay' + this.value];
      }
    });
  }

  getValue() {
  }

}
