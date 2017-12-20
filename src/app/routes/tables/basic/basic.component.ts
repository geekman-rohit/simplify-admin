import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  demodata;

  constructor() {
    this.demodata = demodata;
  }

  ngOnInit() {
  }

}
