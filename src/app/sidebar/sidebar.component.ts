import { Component, OnInit } from '@angular/core';
import { menu } from '../menu';
import { SettingsService } from '../helpers/settings.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = menu;

  constructor(public settings: SettingsService) {
  }

  ngOnInit() {
  }
  toggleSidebarVisibility() {
    this.settings.sidebar.left.visible = !this.settings.sidebar.left.visible;
  }

}
