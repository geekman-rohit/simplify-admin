import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacingComponent } from './spacing/spacing.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
const routes: Routes = [
  { path: 'spacing', component: SpacingComponent, data: { title: 'Profile' } },
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
  declarations: [SpacingComponent]
})
export class UtilitiesModule { }
