import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, personOutline, searchOutline } from 'ionicons/icons'

addIcons({
  'notifications-outline': notificationsOutline,
  'search-outline': searchOutline,
  'person-outline': personOutline
})
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,],
})
export class AppComponent {
  constructor() {
    
  }

}
