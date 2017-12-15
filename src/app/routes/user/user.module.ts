import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
const routes: Routes = [
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
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
  declarations: [ProfileComponent]
})
export class UserModule { }
