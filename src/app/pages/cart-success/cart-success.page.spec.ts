import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartSuccessPage } from './cart-success.page';

describe('CartSuccessPage', () => {
  let component: CartSuccessPage;
  let fixture: ComponentFixture<CartSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
