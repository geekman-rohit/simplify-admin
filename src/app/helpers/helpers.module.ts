import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective
  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective,
    BsDropdownModule
  ]
})
export class HelpersModule { }
