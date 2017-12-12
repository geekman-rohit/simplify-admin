import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { AllComponent } from './all/all.component';
import { ChartHelpersModule } from '../../helpers/chart-helpers/chart-helpers.module';
import { HelpersModule } from '../../helpers/helpers.module';
const routes: Routes = [
  { path: 'all', component: AllComponent },
  { path: 'single', component: SingleComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ChartHelpersModule,
    HelpersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [SingleComponent, AllComponent]
})
export class ProjectsModule { }
