import { Injectable } from '@angular/core';
import { Location } from './home/home.component';
import locations from '../mocks/locations.js';

const chairImage = 'https://secure.img1-fg.wfcdn.com/im/19556338/resize-h600-w600%5Ecompr-r85/3444/34441276/Kitchen+%26+Dining+Chairs.jpg';
const tableImage = 'https://target.scene7.com/is/image/Target/GUEST_3345b6d4-692e-4aea-ba22-07a9181a0833?wid=488&hei=488&fmt=pjpeg';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {


  private locations: Location[] = locations;

  getInventory = () => {
    return locations;
  }

  addToInventory = (item) => {
    const newItem = {
      ...item,
      image: item.category === 'Chairs' ? chairImage : tableImage,
      status: 'Available'
    };
    console.log(newItem);
    this.locations[0].inventory.unshift(newItem);
  }


}
