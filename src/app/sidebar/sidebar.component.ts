import { Component, OnInit } from '@angular/core';
import { menu } from '../routes/menu';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu = menu;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }


}
