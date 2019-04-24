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
export class UploadImageThumbComponent implements OnInit {



  @Input() valueOld: number;
  @Input() nameTour: any;
  @Output() checkNameUpload = new EventEmitter<boolean>();

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


  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private imageService: ImageService) { }

  ngOnInit() {

    this.imageService.getById('temp').subscribe(lists => {
      this.listLink = lists;
      if (this.listLink['thumbnail'] == undefined) {
        this.listLink['thumbnail'] = {};
      }
      console.log(this.listLink);
    });


    this.imageService.getById('temp').subscribe(lists => {
      console.log(lists['thumbnail']);
      if (lists['thumbnail']) {
        this.dataImage = new Array<any>();
        this.dataImage.push(lists['thumbnail']);
        this.checkExistThumbnail = true;
        console.log('pl');
      } else {
        this.checkExistThumbnail = false;
        this.dataImage = new Array<any>();
      }
    });

    console.log(this.dataImage);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    if (this.nameTour !== '') {
      this.checkNameUpload.emit(false);
      this.files.push(files.item(0));
      console.log(this.files);
      console.log('load');
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
        console.log(this.list_links);
        for (const valueLink of this.list_links) {
          this.listLink['thumbnail'] = valueLink;
        }
        this.list_links = [];
        this.Filetotal = 0;
        this.db.doc(`images/temp`).set(this.listLink);
        clearInterval(this.idInterval);
      }
    }, 100);
  }

  deleteImage(path) {
    this.listLink['thumbnail'] = {};
    console.log(this.listLink);
    this.checkExistThumbnail = false;
    this.checkUploaddingThumbnail = false;
    var desertRef = this.storage.ref(path);
    desertRef.delete();
    this.db.doc(`images/temp`).set(this.listLink);
  }

}
