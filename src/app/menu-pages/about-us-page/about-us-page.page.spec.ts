import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutUsPagePage } from './about-us-page.page';

describe('AboutUsPagePage', () => {
  let component: AboutUsPagePage;
  let fixture: ComponentFixture<AboutUsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
