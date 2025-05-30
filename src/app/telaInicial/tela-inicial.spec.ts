import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicial } from './tela-inicial';

describe('HomePage', () => {
  let component: TelaInicial;
  let fixture: ComponentFixture<TelaInicial>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TelaInicial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
