import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileEditPagePage } from './profile-edit-page.page';

describe('ProfileEditPagePage', () => {
  let component: ProfileEditPagePage;
  let fixture: ComponentFixture<ProfileEditPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
