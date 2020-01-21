import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddItemModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
