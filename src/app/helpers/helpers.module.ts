import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleNavDirective } from './collapsible-nav/collapsible-nav.directive';
import { CardDirective } from './card/card.directive';
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarDirective } from './scrollbar/scrollbar.directive';
import { FormsModule, EmailValidator } from '@angular/forms';
import { DropzoneDirective } from './forms/dropzone.directive';
import { SettingsService } from './settings.service';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { FullCalendarDirective } from './calendar/full-calendar.directive';
import { FullCalendarEventDirective } from './calendar/full-calendar-event.directive';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [
    CollapsibleNavDirective,
    CardDirective,
    ScrollbarDirective,
    DropzoneDirective,
    ResponsiveTableComponent,
    FullCalendarDirective,
    FullCalendarEventDirective

  ],
  exports: [
    CollapsibleNavDirective,
    CardDirective,
    NgbModule,
    ScrollbarDirective,
    FormsModule,
    EmailValidator,
    DropzoneDirective,
    FullCalendarDirective,
    FullCalendarEventDirective
  ],
  providers: [
    SettingsService
  ]
})
export class HelpersModule { }
