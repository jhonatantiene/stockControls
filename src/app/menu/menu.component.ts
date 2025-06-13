import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonContent, IonAccordionGroup, IonItem, IonIcon, IonLabel, IonAccordion, IonTitle, IonMenu } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonMenu, IonTitle, IonHeader, IonToolbar, IonContent, IonAccordionGroup, IonItem, IonIcon, IonLabel, IonAccordion],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() { }

  rota(path: string) {
    console.log(path)
    this.router.navigateByUrl(path)
    this.menuCtrl.close()
  }

  tabela = [
    {
      nome: 'Cadastro',
      items: [
        { item: 'Produtos', rota: '/produtos' },
        { item: 'Categorias', rota: '/categorias' },
        { item: 'Fornecedores', rota: '/fornecedores' },
      ],
      icon: 'create-outline'
    },
    {
      nome: 'Movimentações',
      items: [
        { item: 'Entrada de Produtos', rota: '/entrada-de-produtos' },
        { item: 'Saída de Produtos', rota: '/saida-de-produtos' },
        { item: 'Transferências Internas', rota: '/transferencia-interna' },
        { item: 'Devoluções', rota: '/devolucoes' },
      ],
      icon: 'swap-horizontal-outline'
    },

    {
      nome: 'Controle',
      items: [
        { item: 'Inventário', rota: '/inventario' },
        { item: 'Estoque Mínimo e Máximo', rota: '/estoque-minimo-maximo' },
        { item: 'Validade e Lotes', rota: '/validades-lotes' },
        { item: 'Reservas de Estoque', rota: '/reservas-de-estoque' },
      ],
      icon: 'clipboard-outline'
    },

    {
      nome: 'Relatorio',
      items: [
        { item: 'Estoque Atual', rota: '/estoque-atual' },
        { item: 'Entradas/Saídas', rota: '/entradas-saidas' },
        { item: 'Giro de Estoque', rota: '/giro-de-estoque' },
        { item: 'Produtos Críticos', rota: '/produtos-criticos' },
        { item: 'Produtos Vencendo', rota: '/produtos-vencendo' },
      ],
      icon: 'document-text-outline'
    }

  ]

}
