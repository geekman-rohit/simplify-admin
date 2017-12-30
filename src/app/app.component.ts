import { Component } from '@angular/core';
import { SettingsService } from './helpers/settings.service';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public settings: SettingsService, private router: Router, private activatedRoute: ActivatedRoute, private slimLoadingBarService: SlimLoadingBarService) {

    this.router.events.subscribe((event: any) => {
      this.handleNavigation(event);
    });
  }
  handleNavigation(event: any) {
    if(event instanceof NavigationStart) {
      this.startLoading();
    }
    else if(event instanceof NavigationEnd) {
      this.completeLoading();

    }
  }
  startLoading() {
    this.slimLoadingBarService.start();
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }

}
