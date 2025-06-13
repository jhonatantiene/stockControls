import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonCardSubtitle } from "@ionic/angular/standalone";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  standalone: true,
  selector: 'app-tela-inicial',
  templateUrl: 'tela-inicial.html',
  styleUrls: ['tela-inicial.scss'],
  imports: [IonCardSubtitle, IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, HeaderComponent, NgxChartsModule],
})
export class TelaInicial {

  constructor() { }

  dados = [
    { name: 'Hidrometro', value: 30 },
    { name: 'tubete curto PVC 3/4', value: 12 },
    { name: 'Luva PVC 4"', value: 1 },
    { name: 'Joelho 3/4', value: 15 },
    { name: 'Anel de vedação 3"', value: 8 },
    { name: 'Tubete Cego para corte', value: 10 },
    { name: 'Cano PVC 2"', value: 20 },
    { name: 'Registro de rosca interna', value: 5 },
  ]
}

