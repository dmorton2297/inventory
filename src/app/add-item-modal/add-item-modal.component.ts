import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  @Output() update = new EventEmitter<any>();

constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: { ...this.item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.update.emit({type: 'add-item', data: result});
      this.item = result;
      this.item = { id: -1, name: '', description: '', quantity: 0, category: '', image: '', status: '' };
    });
  }

}
