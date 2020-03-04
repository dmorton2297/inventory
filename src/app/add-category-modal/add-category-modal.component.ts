import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CategoryService } from '../category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent {

  data = '';

  constructor(public dialog: MatDialog, private categories: CategoryService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '1000px',
      position: { top: '70px', left: 'calc(50% - 500px)' },
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      this.categories.addCategory(this.data);
      this.data = '';
    });
  }

}
