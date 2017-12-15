import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  title = "Home";
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  this.routeChange(this.activatedRoute);
  this.router.events.filter((event) => event instanceof NavigationEnd)
    .subscribe(() => this.routeChange(this.activatedRoute))
  }

  routeChange(route: ActivatedRoute) {
    while(route.firstChild) route = route.firstChild;
    let data = route.data
    data.subscribe((d)=> {
      this.title = d.title || "Home";
    });
  }

}
