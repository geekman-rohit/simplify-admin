import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module'
const routes: Routes = [
  { path: 'full', component: FullcalendarComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule
  ],
  declarations: [FullcalendarComponent]
})
export class CalendarModule { }
