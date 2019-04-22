import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TourService {
    constructor(protected angularFireDatabase: AngularFireDatabase, protected angularFirestore: AngularFirestore) {
    }
    
    getTour(value) {
        return this.angularFirestore.doc<any>(`${value}`).valueChanges();
    }
    getTourbyID(value, id) {
        return this.angularFirestore.doc<any>(`${value}/${id}`).valueChanges();
    }
}
