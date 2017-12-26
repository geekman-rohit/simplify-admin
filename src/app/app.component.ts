import { Component } from '@angular/core';
import { SettingsService } from './helpers/settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public settings: SettingsService) { }
}
