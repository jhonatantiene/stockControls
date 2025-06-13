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
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.component').then((m) => m.ProdutosComponent),
  },
  {
    path: 'categorias',
    loadComponent: () => import('./categorias/categorias.component').then((m) => m.CategoriasComponent),
  },
  {
    path: 'fornecedores',
    loadComponent: () => import('./fornecedores/fornecedores.component').then((m) => m.FornecedoresComponent)
  },
  {
    path: 'entrada-de-produtos',
    loadComponent: () => import('./entrada-de-produtos/entrada-de-produtos.component').then((m) => m.EntradaDeProdutosComponent)
  },
  {
    path: 'saida-de-produtos',
    loadComponent: () => import('./saida-de-produtos/saida-de-produtos.component').then((m) => m.SaidaDeProdutosComponent)
  },
  {
    path: 'transferencia-interna',
    loadComponent: () => import('./transferencia-interna/transferencia-interna.component').then((m) => m.TransferenciaInternaComponent)
  },
  {
    path: 'devolucoes',
    loadComponent: () => import('./devolucoes/devolucoes.component').then((m) => m.DevolucoesComponent)
  },
  {
    path: 'inventario',
    loadComponent: () => import('./inventario/inventario.component').then((m) => m.InventarioComponent)
  },
  {
    path: 'estoque-minimo-maximo',
    loadComponent: () => import('./estoque-minimo-maximo/estoque-minimo-maximo.component').then((m) => m.EstoqueMinimoMaximoComponent)
  },
  {
    path: 'validades-lotes',
    loadComponent: () => import('./validades-lotes/validades-lotes.component').then((m) => m.ValidadesLotesComponent)
  },
  {
    path: 'reservas-de-estoque',
    loadComponent: () => import('./reserva-de-estoque/reserva-de-estoque.component').then((m) => m.ReservaDeEstoqueComponent)
  },
  {
    path: 'estoque-atual',
    loadComponent: () => import('./estoque-atual/estoque-atual.component').then((m) => m.EstoqueAtualComponent)
  },
  {
    path: 'entradas-saidas',
    loadComponent: () => import('./entradas-saidas/entradas-saidas.component').then((m) => m.EntradasSaidasComponent)
  },
  {
    path: 'giro-de-estoque',
    loadComponent: () => import('./giro-de-estoque/giro-de-estoque.component').then((m) => m.GiroDeEstoqueComponent)
  },
  {
    path: 'produtos-criticos',
    loadComponent: () => import('./produtos-criticos/produtos-criticos.component').then((m) => m.ProdutosCriticosComponent)
  },
  {
    path: 'produtos-vencendo',
    loadComponent: () => import('./produtos-vencendo/produtos-vencendo.component').then((m) => m.ProdutosVencendoComponent)
  },
];
