import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaDeEstoqueComponent } from './reserva-de-estoque.component';

describe('ReservaDeEstoqueComponent', () => {
  let component: ReservaDeEstoqueComponent;
  let fixture: ComponentFixture<ReservaDeEstoqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaDeEstoqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaDeEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
