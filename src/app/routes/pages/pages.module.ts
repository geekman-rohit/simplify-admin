import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent, data: { title: 'Search Results' } },
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent]
})
export class PagesModule { }
