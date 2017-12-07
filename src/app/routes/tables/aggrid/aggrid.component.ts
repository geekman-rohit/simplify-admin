import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: [
    './aggrid.component.scss',
  ]
})
export class AggridComponent implements OnInit {

  rowData;
  colDefs;
  constructor() {
    this.colDefs = [
      {headerName: 'Make', field: 'make', width: 300},
      {headerName: 'Model', field: 'model', width: 300},
      {headerName: 'Price', field: 'price', width: 300}
    ];

    this.rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];
  }

  ngOnInit() {
  }

}
