import { Component, OnInit, Input } from '@angular/core';
import { InventoryItem } from '../home/home.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  @Input() item: InventoryItem;

  constructor(private inventory: InventoryService) { }

  ngOnInit() {
    console.log('Look here!' + this.item);
  }

  incrementQuantity = () => {
    const newQuantity = this.item.quantity + 1;
    this.inventory.updateQuantityOfItem(this.item.id, newQuantity);
  }

  decrementQuantity = () => {
    const newQuantity = this.item.quantity - 1;
    if (newQuantity < 0) {
      this.inventory.updateQuantityOfItem(this.item.id, 0);
      return;
    }
    this.inventory.updateQuantityOfItem(this.item.id, newQuantity);
  }

  onRemove = () => {
    this.inventory.removeFromInventory(this.item.id);
  }

}
