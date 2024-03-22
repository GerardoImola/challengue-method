import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'movie/:id',
    loadComponent: () => import('./components/movie/movie.component').then(m => m.MovieComponent),
  },
];
