import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective
  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective
  ]
})
export class HelpersModule { }
