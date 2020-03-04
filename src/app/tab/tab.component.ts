import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../home/home.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {


  @Input() location: Location;

  constructor() { }
}
