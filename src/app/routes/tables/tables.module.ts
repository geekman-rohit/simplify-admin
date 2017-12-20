import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DataComponent } from './data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { DataTablesModule } from 'angular-datatables';
const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'basic', component: BasicComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule,
    DataTablesModule
  ],
  declarations: [BasicComponent, DataComponent]
})
export class TablesModule { }
