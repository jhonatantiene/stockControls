import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiroDeEstoqueComponent } from './giro-de-estoque.component';

describe('GiroDeEstoqueComponent', () => {
  let component: GiroDeEstoqueComponent;
  let fixture: ComponentFixture<GiroDeEstoqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GiroDeEstoqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiroDeEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
