import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsCreateComponent } from './profile-details-create.component';

describe('ProfileDetailsCreateComponent', () => {
  let component: ProfileDetailsCreateComponent;
  let fixture: ComponentFixture<ProfileDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
