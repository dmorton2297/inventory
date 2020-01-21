import { Component, OnInit } from '@angular/core';
import locations from '../../mocks/locations.js';
import { InventoryService } from '../inventory.service.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public locations: Location[] = [];

  constructor(private inventory: InventoryService) {
    this.locations = inventory.getInventory();
  }

  ngOnInit() {
  }

}

export interface Location {
  id: number;
  name: string;
  inventory: InventoryItem[];
}

export interface InventoryItem {
  name: string;
  description: string;
  quantity: number;
  category: string;
  image: string;
  status: string;
}
