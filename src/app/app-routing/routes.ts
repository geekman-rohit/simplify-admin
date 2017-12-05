import { Routes } from '@angular/router';
import { NotFoundComponent } from '../error-pages/not-found/not-found.component';
export const routes: Routes = [

  /* Child Routing Modules to load with LazyLoading */
  {
    path: 'dashboard',
    loadChildren: 'app/routes/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'ui',
    loadChildren: 'app/routes/components/components.module#ComponentsModule'
  },

  /* Redirect Default Page to Dashboard */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /* 404 Error Page */
  { path: '**', component: NotFoundComponent, }

]
