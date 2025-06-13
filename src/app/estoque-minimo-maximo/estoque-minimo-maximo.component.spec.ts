import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstoqueMinimoMaximoComponent } from './estoque-minimo-maximo.component';

describe('EstoqueMinimoMaximoComponent', () => {
  let component: EstoqueMinimoMaximoComponent;
  let fixture: ComponentFixture<EstoqueMinimoMaximoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueMinimoMaximoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueMinimoMaximoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
