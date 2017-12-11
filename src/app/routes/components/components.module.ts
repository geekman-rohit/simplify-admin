import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './progress/progress.component';
import { CardsComponent } from './cards/cards.component';
import { HelpersModule } from '../../helpers/helpers.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavComponent } from './nav/nav.component';
import { AccordianComponent } from './accordian/accordian.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { RatingComponent } from './rating/rating.component';
const routes: Routes = [
  { path: '', redirectTo: '/ui/buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'nav', component: NavComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'accordian', component: AccordianComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'rating', component: RatingComponent }
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
  declarations: [ButtonsComponent, ProgressComponent, CardsComponent, DropdownComponent, NavComponent, AccordianComponent, PaginationComponent, TooltipComponent, AlertComponent, CollapseComponent, CarouselComponent, ModalComponent, RatingComponent]
})
export class ComponentsModule { }
