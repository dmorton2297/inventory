import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../home/home.component';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  @Input() location: Location;

  constructor() {
    console.log(location);
  }
}
