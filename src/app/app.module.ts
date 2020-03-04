
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatIconModule, MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddLocationModalComponent } from './add-location-modal/add-location-modal.component';
import { TabComponent } from './tab/tab.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { ChangeStatusModalComponent } from './change-status-modal/change-status-modal.component';
import { RemoveLocationModalComponent } from './remove-location-modal/remove-location-modal.component';
import { RemoveLocationComponent } from './remove-location/remove-location.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LogoComponent,
    InventoryListComponent,
    InventoryItemComponent,
    AddItemComponent,
    AddItemModalComponent,
    EditItemComponent,
    EditItemModalComponent,
    AddCategoryComponent,
    AddCategoryModalComponent,
    AddLocationComponent,
    AddLocationModalComponent,
    TabComponent,
    ChangeStatusComponent,
    ChangeStatusModalComponent,
    RemoveLocationModalComponent,
    RemoveLocationComponent
  ],
  entryComponents: [
    AddItemComponent,
    EditItemComponent,
    AddCategoryComponent,
    AddLocationComponent,
    ChangeStatusComponent,
    RemoveLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
