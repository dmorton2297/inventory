import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InventoryService } from '../inventory.service';
import { RemoveLocationComponent } from '../remove-location/remove-location.component';

@Component({
  selector: 'app-remove-location-modal',
  templateUrl: './remove-location-modal.component.html',
  styleUrls: ['./remove-location-modal.component.css']
})
export class RemoveLocationModalComponent {

  public inventory;
  constructor(public dialog: MatDialog, private inv: InventoryService) {
    this.inventory = inv.getInventory();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveLocationComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: [ ...this.inventory ]
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

}
