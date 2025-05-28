import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonIcon, IonButton, IonList, IonItem, IonItemDivider, IonLabel, IonMenuToggle, IonAccordionGroup, IonAccordion, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [IonSplitPane, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonMenuToggle],
})
export class HomePage {
  constructor() {
    console.log(this.tabela)

  }

  tabela = [
    {
        nome: 'Cadastro',
        items: [
          'Produtos',
          'Categorias',
          'Fornecedores']
        ,
    },
    {
        nome: 'Movimentações',
        items: [
          'Entrada de Produtos',
          'Saída de Produtos',
          'Transferências Internas',
          'Devoluções'
        ]
    },

    {
        nome: 'Controle',
        items: [
          'Inventário',
          'Estoque Mínimo e Máximo',
          'Validade e Lotes',
          'Reservas de Estoque'
        ]
    },

    {
        nome: 'Relatorio',
        items: [
          'Estoque Atual',
          'Movimentações (Entradas/Saídas)',
          'Giro de Estoque',
          'Produtos Críticos',
          'Produtos Vencendo'
        ]
    }

  ]

}



