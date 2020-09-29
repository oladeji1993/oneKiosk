import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperMartPage } from './super-mart.page';

describe('SuperMartPage', () => {
  let component: SuperMartPage;
  let fixture: ComponentFixture<SuperMartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperMartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperMartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
