import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { MatDialog } from '@angular/material';
import { AddLocationComponent } from '../add-location/add-location.component';

@Component({
  selector: 'app-add-location-modal',
  templateUrl: './add-location-modal.component.html',
  styleUrls: ['./add-location-modal.component.css']
})
export class AddLocationModalComponent implements OnInit {

  locationName = '';

  constructor(public dialog: MatDialog, private inventory: InventoryService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: this.locationName
    });

    dialogRef.afterClosed().subscribe(result => {
      this.locationName = result;
      this.inventory.createNewLocation(result);
      this.locationName = '';
    });
  }

  ngOnInit() {
  }

}
