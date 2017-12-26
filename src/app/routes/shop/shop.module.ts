import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent, data: { title: 'Invoice' }  },
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing' }  }
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
  declarations: [InvoiceComponent, PricingComponent]
})
export class ShopModule { }
