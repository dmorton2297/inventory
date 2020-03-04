import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-location',
  templateUrl: './remove-location.component.html',
  styleUrls: ['./remove-location.component.css']
})
export class RemoveLocationComponent {
  formData = [];
  constructor(
    public dialogRef: MatDialogRef<RemoveLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location[]
  ) {
    data.forEach(x => {
      this.formData[x.id] = false;
    });
  }

  createResponse = (data) => {
    const resp = [];
    data.forEach(x => {
      console.log(this.formData[x.id]);
      if (this.formData[x.id]) {
        resp.push(x.id);
      }
    });

    return resp;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
