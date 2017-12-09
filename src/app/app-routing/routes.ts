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
  {
    path: 'charts',
    loadChildren: 'app/routes/charts/charts.module#ChartsModule'
  },
  {
    path: 'tables',
    loadChildren: 'app/routes/tables/tables.module#TablesModule'
  },
  {
    path: 'projects',
    loadChildren: 'app/routes/projects/projects.module#ProjectsModule'
  },

  /* Redirect Default Page to */
  { path: '', redirectTo: '/dashboard/pro', pathMatch: 'full' },

  /* 404 Error Page */
  { path: '**', component: NotFoundComponent, }

];
