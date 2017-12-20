import { Directive, ElementRef, OnInit } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appFullCalendar]'
})
export class FullCalendarDirective implements OnInit {
  constructor(private ele: ElementRef) {

  }
  ngOnInit() {
    $(this.ele.nativeElement).fullCalendar({
      header: {
        left: 'title',
        right: 'today prev,next month,agendaWeek,agendaDay'
      },
      editable: true,
      droppable: true
    });
  }

}
