import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tela-inicial',
    loadComponent: () => import('./telaInicial/tela-inicial').then((m) => m.TelaInicial),
  },
  {
    path: '',
    redirectTo: 'tela-inicial',
    pathMatch: 'full',
  },
];
