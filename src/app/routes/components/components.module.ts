import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { CardsComponent } from './cards/cards.component';
import { HelpersModule } from '../../helpers/helpers.module';
const routes: Routes = [
  { path: '', redirectTo: '/ui/buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'progress', component: ProgressComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HelpersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [ButtonsComponent, ProgressComponent, CardsComponent]
})
export class ComponentsModule { }
