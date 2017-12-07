import { Component, OnInit } from '@angular/core';
import { menu } from '../routes/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = menu;
  constructor() { }

  ngOnInit() {
  }


}
