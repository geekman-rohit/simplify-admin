import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss']
})
export class ResponsiveTableComponent implements OnInit {

  input = {
    head: [
      "Dead", "Dead2", "Dead3", "Dead4"
    ],
    body: [
      [ "1", "2", "3", "4", "5", "6"],
      [ "1", "2", "3", "4", "5", "6"],
      [ "1", "2", "3", "4", "5", "6"],
      [ "1", "2", "3", "4", "5", "6"],
      [ "1", "2", "3", "4", "5", "6"],
    ]
  }
  constructor() { }

  ngOnInit() {
  }
  isValidTable(data) {
    return true;
  }

}
