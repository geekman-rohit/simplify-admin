import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarDirective } from './scrollbar/scrollbar.directive';
import { FormsModule, EmailValidator } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective,
    ScrollbarDirective
  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective,
    NgbModule,
    ScrollbarDirective,
    FormsModule,
    EmailValidator
  ]
})
export class HelpersModule { }
