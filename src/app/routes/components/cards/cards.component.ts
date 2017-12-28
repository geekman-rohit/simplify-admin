import { Component, OnInit } from '@angular/core';
import { demodata } from './demodata';
import { Color, colors } from '../../../helpers/colors';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  bodyVisible = true;
  demodata;

  
  constructor() {
    this.demodata = demodata;
  }

  ngOnInit() {
  }

}
