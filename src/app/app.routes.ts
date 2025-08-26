import { Routes } from '@angular/router';
import { DashboardComponenet } from './pages/dashboard/dashboard';
import { LoginComponent } from './pages/login/login';
import { BugComponent } from './pages/bug/bug';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponenet,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'bug',
    component: BugComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
