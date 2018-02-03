import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module'
import { TimelineComponent } from './timeline/timeline.component';;
const routes: Routes = [
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'timeline', component: TimelineComponent, data: { title: 'Timeline Component' } }
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ],
  declarations: [ProfileComponent, TimelineComponent]
})
export class UserModule { }
