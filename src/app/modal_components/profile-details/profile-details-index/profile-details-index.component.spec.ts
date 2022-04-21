import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsIndexComponent } from './profile-details-index.component';

describe('ProfileDetailsIndexComponent', () => {
  let component: ProfileDetailsIndexComponent;
  let fixture: ComponentFixture<ProfileDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
