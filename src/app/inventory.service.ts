import { Injectable } from '@angular/core';
import { Location } from './home/home.component';
import locations from '../mocks/locations.js';

const chairImage = 'https://secure.img1-fg.wfcdn.com/im/19556338/resize-h600-w600%5Ecompr-r85/3444/34441276/Kitchen+%26+Dining+Chairs.jpg';
const tableImage = 'https://target.scene7.com/is/image/Target/GUEST_3345b6d4-692e-4aea-ba22-07a9181a0833?wid=488&hei=488&fmt=pjpeg';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor() {}
  private locations: Location[] = locations;

  getInventory = () => {
    return locations;
  }

  addToInventory = (item, locationId) => {
    const newItem = {
      ...item,
      id: this.locations.length + (Math.random() * 1000),
      image: item.category === 'Chairs' ? chairImage : tableImage,
      status: 'Available'
    };

    this.locations[locationId].inventory.unshift(newItem);
  }

  removeFromInventory = (id) => {
    this.locations.forEach(x => {
      x.inventory.forEach(y => {
        if (y.id === id) {
          x.inventory = x.inventory.filter(f => f.id !== id);
        }
      })
    });
  }

  changeStatus = (id, status) => {
    this.locations.forEach(x => {
      x.inventory.forEach(y => {
        if (y.id === id) {
          y.status = status;
        }
      });
    });
  };

  updateInventory = (item) => {
    this.locations.forEach(x => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < x.inventory.length; i++) {
        if (x.inventory[i].id === item.id) {
          x.inventory[i] = item;
          return;
        }

      }
    });
  }

  updateQuantityOfItem = (id, quantity) => {
    this.locations.forEach(x => {
      x.inventory.forEach(y => {
        if (y.id === id) {
          y.quantity = quantity;
        }
      });
    });
  }

  createNewLocation = (locationName) => {
    const x = locations.length;
    const newId = x + (Math.random() * 1000);
    const newLocation = {
      id: newId,
      name: locationName,
      inventory: []
    };
    this.locations.push(newLocation);
  }


}
