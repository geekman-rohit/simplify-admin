import { Directive, Input, OnChanges, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Directive({
  selector: '[appCollapsibleNav]',
})
export class CollapsibleNavDirective implements OnInit {

  @Input() appColor: string;


  constructor( public el: ElementRef  ) {
  }

  @HostListener('click', ['$event']) navClick(event) {

    let target = event.target;
    let targetLink;
    if(target.nodeName.toLowerCase() == 'li') {

      targetLink = target;


    } else if (target.parentNode.nodeName.toLowerCase() == 'li') {

      targetLink = target.parentNode;


    } else if ( target.parentNode.parentNode.nodeName.toLowerCase() == 'li' ) {

      targetLink = target.parentNode.parentNode;

    }  else if ( target.parentNode.parentNode.parentNode.nodeName.toLowerCase() == 'li' ) {

      targetLink = target.parentNode.parentNode.parentNode;

    }
    if(targetLink) {
      return this.linkClicked(targetLink);;
    }
    return true;
  }
  linkClicked(el) {

    let element = $(el);

    if(element.children('ul').length > 0) {

      if(element.hasClass('active')) {
        this.close(element);
      } else {
        this.open(element);
      }
      return false;
    }
    this.open(element);
    return true;

  }
  open(element) {

    element.addClass('active');
    var siblings = element.siblings('li');
    siblings.removeClass('active');
  }
  close(element) {
    element.removeClass('active');
    var children = element.find('active');
    children.removeClass('active');

  }

}
