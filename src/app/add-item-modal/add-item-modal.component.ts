import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddItemComponent, } from '../add-item/add-item.component';
import { InventoryItem } from '../home/home.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {

  item: InventoryItem;

  constructor(public dialog: MatDialog, private inventory: InventoryService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '95vw',
      data: { ...this.item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.item = result;
      this.inventory.addToInventory(this.item);
      this.item = { name: '', description: '', quantity: 0, category: '', image: '', status: '' };
    });
  }

}
