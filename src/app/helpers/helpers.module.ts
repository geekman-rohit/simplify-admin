import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarDirective } from './scrollbar/scrollbar.directive';
import { FormsModule, EmailValidator } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DropzoneDirective } from './forms/dropzone.directive';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective,
    ScrollbarDirective,
    DropzoneDirective
  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective,
    NgbModule,
    ScrollbarDirective,
    FormsModule,
    EmailValidator,
    FroalaEditorModule,
    FroalaViewModule,
    DropzoneDirective
  ]
})
export class HelpersModule { }
