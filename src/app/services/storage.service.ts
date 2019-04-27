import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getValue(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public setValue(key: string, obj: any) {
    const value = JSON.stringify(obj);
    localStorage.setItem(key, value);
  }

  public deleteValue(key: string) {
    localStorage.removeItem(key);
  }
}
