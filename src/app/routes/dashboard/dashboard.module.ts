import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';
const routes: Routes = [
  { path: '', component: DashboardComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ChartHelpersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
