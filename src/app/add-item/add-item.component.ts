import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryItem } from '../home/home.component';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  CATEGORIES: string[];

  constructor(
    private categoires: CategoryService,
    public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryItem) {
      this.CATEGORIES = categoires.getCategories();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
