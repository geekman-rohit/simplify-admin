import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCard]',
  exportAs: 'card'
})
export class CardDirective {

  @HostBinding('class.collapsed') isCollapsed = false;
  @HostBinding('class.fullscreen') isFullScreen = false;
  @Input() initialCollapseState = false;
  @Input() initialFullScreenState = false;

  constructor(ele: ElementRef) {
    this.isCollapsed = this.initialCollapseState;
    this.isFullScreen = this.initialFullScreenState;
  }
  toggleCollapse() {
    console.log('here');
    this.isCollapsed = !this.isCollapsed;
  }
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

}
