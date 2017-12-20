import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
import { Color, colors } from '../../../helpers/colors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  demodata;
  constructor() {
    this.demodata = demodata;
  }

  ngOnInit() {
    
  }

}
