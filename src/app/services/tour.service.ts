import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class TourService extends BaseService {
  constructor(protected angularFireDatabase: AngularFireDatabase, protected angularFirestore: AngularFirestore) {
    super(angularFireDatabase, angularFirestore, 'tour');
  }
}
