import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LockComponent } from './lock/lock.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpersModule } from '../helpers/helpers.module';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'lock', component: LockComponent }
]
@NgModule({
  imports: [
    CommonModule,
     HelpersModule,
     RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [LoginComponent, SignupComponent, LockComponent]
})
export class FrontModule { }
