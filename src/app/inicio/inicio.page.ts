import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonIcon, IonButton, IonItem, IonLabel, IonAccordionGroup, IonAccordion, IonImg, IonRippleEffect } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [IonRippleEffect, IonImg, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})
export class HomePage {
  constructor() {
  }

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



