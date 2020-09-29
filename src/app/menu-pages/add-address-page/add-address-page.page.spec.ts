import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAddressPagePage } from './add-address-page.page';

describe('AddAddressPagePage', () => {
  let component: AddAddressPagePage;
  let fixture: ComponentFixture<AddAddressPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
