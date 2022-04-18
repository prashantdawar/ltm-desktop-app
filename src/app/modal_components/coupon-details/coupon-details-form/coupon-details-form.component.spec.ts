import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDetailsFormComponent } from './coupon-details-form.component';

describe('CouponDetailsFormComponent', () => {
  let component: CouponDetailsFormComponent;
  let fixture: ComponentFixture<CouponDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
