import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { BaseService } from './base.service';

@Injectable()
export class HomeService extends BaseService {
    constructor(protected angularFireDatabase: AngularFireDatabase, protected angularFirestore: AngularFirestore) {
        super(angularFireDatabase, angularFirestore, 'home');
    }
}


