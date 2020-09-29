import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacyPagePage } from './privacy-page.page';

describe('PrivacyPagePage', () => {
  let component: PrivacyPagePage;
  let fixture: ComponentFixture<PrivacyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
