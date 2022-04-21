import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsUpdateComponent } from './profile-details-update.component';

describe('ProfileDetailsUpdateComponent', () => {
  let component: ProfileDetailsUpdateComponent;
  let fixture: ComponentFixture<ProfileDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
