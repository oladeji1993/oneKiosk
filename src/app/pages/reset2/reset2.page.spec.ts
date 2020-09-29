import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reset2Page } from './reset2.page';

describe('Reset2Page', () => {
  let component: Reset2Page;
  let fixture: ComponentFixture<Reset2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reset2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reset2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
