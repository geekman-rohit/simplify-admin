import { Directive, OnInit, ElementRef, Input, HostBinding } from '@angular/core';
import * as Chartist from 'chartist';
@Directive({
  selector: '[appChartist]'
})
export class ChartistDirective implements OnInit {

  @HostBinding('class') eleClass = 'ct-chart ct-major-sixth';
  @Input() appChartist: string;
  @Input() chartdata;
  ele: ElementRef;
  chart: Chartist;
  native: any;
  constructor(ele: ElementRef) {
    this.ele = ele;
    this.native = ele.nativeElement;
  }
  ngOnInit() {

    const data = this.chartdata;

    switch (this.appChartist) {
      case 'bar':
        this.renderBarChart(data);
        break;
      case 'line':
        this.renderLineChart(data);
        break;
      case 'area':
        this.renderAreaChart(data);
        break;
      default:
      this.renderLineChart(data);
    }

  }
  renderLineChart(data) {
    this.chart = new Chartist.Line(this.native, data);
  }
  renderAreaChart(data) {
    const options = {
      lineSmooth: Chartist.Interpolation.none(),
      high: 5,
      low: 0,
      fullWidth: true,
      showArea: true,
    };
    this.chart = new Chartist.Line(this.native, data, options);
  }
  renderBarChart(data) {
    const options = {
      seriesBarDistance: 35
    };
    this.chart = new Chartist.Bar(this.native, data, options);
  }

}
