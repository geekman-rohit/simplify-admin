import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../../helpers/helpers.module';
import { ComposeComponent } from './compose/compose.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'chat', component: ChatComponent }
];
@NgModule({
  imports: [
    CommonModule,
    HelpersModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [InboxComponent, ComposeComponent, ChatComponent]
})
export class EmailModule { }
