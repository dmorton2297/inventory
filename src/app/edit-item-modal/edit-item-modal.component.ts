import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryItem } from '../home/home.component';
import { InventoryService } from '../inventory.service';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent {

  @Input() item: InventoryItem;

  constructor(public dialog: MatDialog, private inventory: InventoryService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: { ...this.item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.inventory.updateInventory(result);
      }
    });
  }
}
