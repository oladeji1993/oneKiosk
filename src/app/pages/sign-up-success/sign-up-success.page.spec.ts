import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpSuccessPage } from './sign-up-success.page';

describe('SignUpSuccessPage', () => {
  let component: SignUpSuccessPage;
  let fixture: ComponentFixture<SignUpSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
