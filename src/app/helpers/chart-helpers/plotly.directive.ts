import { Directive, Input, ElementRef, HostBinding, OnInit } from '@angular/core';
declare var Plotly: any;
@Directive({
  selector: '[appPlotly]'
})
export class PlotlyDirective implements OnInit {
  el: ElementRef;
  native: any;
  constructor (el: ElementRef) {
    this.el = el;
    this.native = el.nativeElement;
  }
  ngOnInit () {
    const trace1 = {
      x: [1, 2, 3, 4, 5, 6],
      y: [10, 15, 13, 17, 12, 11],
      width: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
      marker: {color: '#8A75F2'},
      type: 'scatter'
    };
    const trace2 = {
      x: [1, 2, 3, 4, 5, 6],
      y: [16, 5, 11, 9, 5, 7],
      type: 'scatter'
    };
    const data = [trace1, trace2];
    const layout = {
      xaxis: {
        autotick: false,
        tick0: 0,

      },
      yaxis: {

        autotick: false,
        tick0: 0,

      },
      margin: {
        l: 50,
        r: 30,
        b: 50,
        t: 40,
        pad: 4
      },
    };
    Plotly.newPlot(this.native, data, layout);
  }

}
