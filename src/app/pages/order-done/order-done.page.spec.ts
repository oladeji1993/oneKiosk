import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderDonePage } from './order-done.page';

describe('OrderDonePage', () => {
  let component: OrderDonePage;
  let fixture: ComponentFixture<OrderDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
