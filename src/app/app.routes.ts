import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/dashboard';
import { ShipmentsPage } from './features/shipments/shipments';
import { TrackingPage } from './features/tracking/tracking';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'shipments', component: ShipmentsPage },
  { path: 'tracking/:id', component: TrackingPage },
  { path: '**', redirectTo: 'dashboard' },
];
