import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TourService {
    constructor(protected angularFireDatabase: AngularFireDatabase, protected angularFirestore: AngularFirestore) {
    }
    
    getTour() {
        let dataTours: Observable<any[]>;
        dataTours = this.angularFirestore.collection('tour').snapshotChanges().pipe(map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data;
          });
        }));
        return dataTours;
      }
    getTourbyID(value, id) {
        return this.angularFirestore.doc<any>(`${value}/${id}`).valueChanges();
    }
}
