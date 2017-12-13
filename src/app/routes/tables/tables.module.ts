import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DataComponent } from './data/data.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { AgGridModule } from 'ag-grid-angular/main';
const routes: Routes = [
  { path: 'aggrid', component: AggridComponent },
  { path: 'data', component: DataComponent },
  { path: 'basic', component: BasicComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule,
    AgGridModule.withComponents([])
  ],
  declarations: [BasicComponent, DataComponent, AggridComponent]
})
export class TablesModule { }
