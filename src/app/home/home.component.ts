import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service.js';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('tabGroup', { static: false }) tabGroup;
  public currentTab = 0;
  public locations: Location[] = [];


  constructor(private inventory: InventoryService) {
    this.locations = this.inventory.getInventory();
  }

  onUpdate(update: any) {
    console.log(update.data);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.currentTab = tabChangeEvent.index;
  }

  ngAfterViewInit() {
    console.log(this.tabGroup.selectedIndex);
  }

  onEvent(e) {
    this.inventory.addToInventory(e.data, this.currentTab);
  }

}

export interface Location {
  id: number;
  name: string;
  inventory: InventoryItem[];
}

export interface InventoryItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
  category: string;
  image: string;
  status: string;
}
