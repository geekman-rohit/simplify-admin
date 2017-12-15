import { Routes } from '@angular/router';
import { NotFoundComponent } from '../error-pages/not-found/not-found.component';
import { LayoutComponent } from '../layout/layout.component';
export const routes: Routes = [

  /* Child Routing Modules to load with LazyLoading */
  {
    path: 'front',
    loadChildren: 'app/front/front.module#FrontModule'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      {
        path: 'forms',
        loadChildren: 'app/routes/forms/forms.module#FormsModule'
      },
      {
        path: 'user',
        loadChildren: 'app/routes/user/user.module#UserModule'
      },
      {
        path: 'email',
        loadChildren: 'app/routes/email/email.module#EmailModule'
      },
      {
        path: 'shop',
        loadChildren: 'app/routes/shop/shop.module#ShopModule'
      },
      { path: '', redirectTo: '/dashboard/pro', pathMatch: 'full' },
      /* 404 Error Page */
      { path: '**', component: NotFoundComponent, }

    ]
  },

  /* Redirect Default Page to */
  { path: '', redirectTo: '/dashboard/pro', pathMatch: 'full' },

  /* 404 Error Page */
  { path: '**', component: NotFoundComponent, }

];
