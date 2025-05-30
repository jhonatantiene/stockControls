import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-tela-inicial',
  templateUrl: 'tela-inicial.html',
  styleUrls: ['tela-inicial.scss'],
  imports: [HeaderComponent, MenuComponent],
})
export class TelaInicial {
  constructor() { }
}
