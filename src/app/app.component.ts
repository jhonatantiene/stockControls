import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { clipboardOutline, createOutline, documentTextOutline, gridOutline, notificationsOutline, personOutline, pricetagOutline, searchOutline, swapHorizontalOutline,  } from 'ionicons/icons'
import { MenuComponent } from './menu/menu.component';

addIcons({
  'notifications-outline': notificationsOutline,
  'search-outline': searchOutline,
  'person-outline': personOutline,
  'create-outline': createOutline,
  'pricetags-outline': pricetagOutline,
  'swap-horizontal-outline': swapHorizontalOutline,
  'document-text-outline': documentTextOutline,
  'clipboard-outline': clipboardOutline,
  'grid-outline': gridOutline
})
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor() {
    
  }

}
