import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'app-upload-image-thumb',
  templateUrl: './upload-image-thumb.component.html',
  styleUrls: ['./upload-image-thumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ImageService]
})
export class UploadImageThumbComponent implements OnInit, OnChanges {



  @Input() valueOld: number;
  @Input() nameTour: any;
  @Input() dataImagesCheck: any = { thumbnail: { link: '', path: '' } };
  @Output() checkNameUpload = new EventEmitter<boolean>();
  @Output() getArrClearThumb = new EventEmitter<any>();

  isHovering: boolean;
  datas: Observable<any[]>;
  dataTests: any;
  dataImage = new Array<any>();
  idInterval: any;
  Filetotal: number = 0;
  listLink = [];
  files: File[] = [];
  list_links = new Array<any>();
  checkTrue = true;
  checkExistThumbnail: boolean = false;
  checkUploaddingThumbnail: boolean = false;
  changeLinkTemp = '';
  dataImageClear = [];
  change = false;
  showContent: boolean = false;


  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private imageService: ImageService) { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.dataImagesCheck);
    if (this.dataImagesCheck == null) {
      this.dataImagesCheck = {};
      // console.log('NULL');
    }

    if (this.dataImagesCheck.thumbnail) {
      this.changeLinkTemp = 'edit';
      this.change = true;
      this.db.doc(`images/temp${this.changeLinkTemp}`).set(this.dataImagesCheck);

      this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
        this.listLink = lists;
        let checkObjEmpty = Object.entries(this.listLink['thumbnail']).length === 0 && this.listLink['thumbnail'].constructor === Object;
        if (checkObjEmpty) {
          this.listLink['thumbnail'] = {};
        }
      });

      this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
        let checkObjEmpty = Object.entries(lists['thumbnail']).length === 0 && lists['thumbnail'].constructor === Object;
        if (!checkObjEmpty) {
          this.dataImage = new Array<any>();
          this.dataImage.push(lists['thumbnail']);
          this.checkExistThumbnail = true;
        } else {
          this.checkExistThumbnail = false;
          this.dataImage = [];
        }
      });
    } else if (this.dataImagesCheck.thumbnail == undefined) {
      this.change = true;
    }

  }


  ngOnInit() {

    if (this.change) {

      this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
        this.listLink = lists;
        let checkObjEmpty = Object.entries(this.listLink['thumbnail']).length === 0 && this.listLink['thumbnail'].constructor === Object;
        if (checkObjEmpty) {
          this.listLink['thumbnail'] = {};
        }
      });

      setTimeout(() => {
        this.imageService.getById('temp' + this.changeLinkTemp).subscribe(lists => {
          let checkObjEmpty = Object.entries(lists['thumbnail']).length === 0 && lists['thumbnail'].constructor === Object;
          if (!checkObjEmpty) {

            this.dataImage = new Array<any>();
            this.dataImage.push(lists['thumbnail']);
            this.checkExistThumbnail = true;
          } else {
            this.checkExistThumbnail = false;
            this.dataImage = [];
          }
        });
      }, 100);
    }

  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    if (this.nameTour !== '') {
      this.checkNameUpload.emit(false);
      this.files.push(files.item(0));
      this.Filetotal += 1;
      this.CheckDone();
      this.checkUploaddingThumbnail = true;
    } else {
      this.checkNameUpload.emit(true);
    }
  }

  CheckDone() {
    this.idInterval = setInterval(() => {
      if (this.list_links.length === this.Filetotal) {
        for (const valueLink of this.list_links) {
          this.listLink['thumbnail'] = valueLink;
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
    if (!checkObjEmpty) {
      this.dataImageClear.push(this.listLink['thumbnail']);
      this.getArrClearThumb.emit(this.dataImageClear);
    }
    this.listLink['thumbnail'] = {};
    this.checkExistThumbnail = false;
    this.checkUploaddingThumbnail = false;
    if (checkObjEmpty) {
      var desertRef = this.storage.ref(path);
      desertRef.delete();
      this.db.doc(`images/temp${this.changeLinkTemp}`).set(this.listLink);
    }
    this.dataImage = [];
  }

  gett() {
  }

}
