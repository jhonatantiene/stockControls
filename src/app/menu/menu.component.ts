import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonAccordionGroup, IonItem, IonIcon, IonLabel, IonAccordion, IonTitle, IonMenu } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonMenu ,IonTitle, IonHeader, IonToolbar, IonContent, IonAccordionGroup, IonItem, IonIcon, IonLabel, IonAccordion],
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  tabela = [
    {
      nome: 'Cadastro',
      items: [
        'Produtos',
        'Categorias',
        'Fornecedores']
      ,
      icon: 'create-outline'
    },
    {
      nome: 'Movimentações',
      items: [
        'Entrada de Produtos',
        'Saída de Produtos',
        'Transferências Internas',
        'Devoluções'
      ],
      icon: 'swap-horizontal-outline'
    },

    {
      nome: 'Controle',
      items: [
        'Inventário',
        'Estoque Mínimo e Máximo',
        'Validade e Lotes',
        'Reservas de Estoque'
      ],
      icon: 'clipboard-outline'
    },

    {
      nome: 'Relatorio',
      items: [
        'Estoque Atual',
        'Entradas/Saídas',
        'Giro de Estoque',
        'Produtos Críticos',
        'Produtos Vencendo'
      ],
      icon: 'document-text-outline'
    }

  ]

}
