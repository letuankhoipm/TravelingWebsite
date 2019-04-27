import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateContactService {
  public getDestination = new BehaviorSubject<string>('');

  constructor() { }

  public changeDestination(destination: string) {
    this.getDestination.next(destination);
  }
}
