import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDetailsIndexComponent } from './coupon-details-index.component';

describe('CouponDetailsIndexComponent', () => {
  let component: CouponDetailsIndexComponent;
  let fixture: ComponentFixture<CouponDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
