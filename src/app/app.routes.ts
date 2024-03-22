import { Routes } from '@angular/router';
import {ROUTE_HOME_RELATIVE} from "./shared/routing-paths";

export const routes: Routes = [
  {
    path: ROUTE_HOME_RELATIVE,
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },];
