import { Directive, Input, ElementRef, HostBinding, OnInit } from '@angular/core';
import * as c3 from 'c3';
@Directive({
  selector: '[appC3]'
})
export class C3Directive implements OnInit {
  @Input() appC3;
  ele: ElementRef;
  native: any;
  constructor(ele: ElementRef) {
    this.ele = ele;
    this.native = ele.nativeElement;
  }
  ngOnInit() {
    console.log(this.appC3);
    const chart = c3.generate({
    bindto: this.native,
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
    });
  }


}
