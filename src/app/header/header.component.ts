import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButton, IonIcon, IonButtons, IonTitle, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonTitle, IonHeader, IonButtons, IonButton, IonIcon, IonToolbar, IonMenuButton]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
