import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../helpers/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }
  toggleSettingsVisibility() {
    this.settings.sidebar.right.visible = !this.settings.sidebar.right.visible;
  }
}
