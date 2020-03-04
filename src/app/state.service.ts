import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public viewedLocationId = 0;

  setViewLocationId(id) {
    this.viewedLocationId = id;
    console.log('set');
    console.log(this.viewedLocationId);
  }
}
