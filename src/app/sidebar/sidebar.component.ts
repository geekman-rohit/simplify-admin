import { Component, OnInit, HostBinding } from '@angular/core';
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
  navClass() {
    return [
      "list-nav-" + this.settings.sidebar.left.background + "-" + this.settings.sidebar.left.accent,
      "list-nav-" + this.settings.sidebar.left.background
    ]
  }
  headerClass() {
    return "bg-" + this.settings.sidebar.left.accent;
  }

}
