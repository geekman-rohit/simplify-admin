import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CollapsibleNavDirective } from './helpers/collapsible-nav/collapsible-nav.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SidebarComponent,
    TopbarComponent,
    CollapsibleNavDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
