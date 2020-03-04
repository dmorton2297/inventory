import { Component, OnInit, Output, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { InventoryItem } from '../home/home.component';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent {

  OPTIONS = ['Available', 'Unavailable'];

  constructor(
    public dialogRef: MatDialogRef<ChangeStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryItem
    ) { }


    onNoClick(): void {
      this.dialogRef.close();
    }
}
