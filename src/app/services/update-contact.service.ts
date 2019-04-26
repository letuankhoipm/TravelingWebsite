import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateContactService {

  @Output() getDestination: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public changeDestination(destination: string) {
    this.getDestination.emit(destination);
  }
}
