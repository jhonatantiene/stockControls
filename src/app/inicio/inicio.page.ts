import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons],
})
export class HomePage {
  constructor() {}
}
