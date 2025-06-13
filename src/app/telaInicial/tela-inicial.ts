import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IonGrid, IonRow, IonCol, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonCardSubtitle } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-tela-inicial',
  templateUrl: 'tela-inicial.html',
  styleUrls: ['tela-inicial.scss'],
  imports: [IonCardSubtitle, IonButton, IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonCol, IonRow, IonGrid, HeaderComponent,],
})
export class TelaInicial {
  constructor() { }
}
