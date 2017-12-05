import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
const routes: Routes = [
  { path: '', redirectTo: '/ui/buttons', pathMatch:'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'progress', component: ProgressComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ButtonsComponent, ProgressComponent]
})
export class ComponentsModule { }
