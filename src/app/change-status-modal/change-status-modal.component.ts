import { Component, OnInit, Input } from '@angular/core';
import { InventoryItem } from '../home/home.component';
import { MatDialog } from '@angular/material';
import { ChangeStatusComponent } from '../change-status/change-status.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-change-status-modal',
  templateUrl: './change-status-modal.component.html',
  styleUrls: ['./change-status-modal.component.css']
})
export class ChangeStatusModalComponent {

  @Input() item: InventoryItem;

  constructor(public dialog: MatDialog, private inventory: InventoryService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeStatusComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: { ...this.item }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.inventory.changeStatus(result.id, result.status);
    });
  }
}
