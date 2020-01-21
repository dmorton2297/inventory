import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
