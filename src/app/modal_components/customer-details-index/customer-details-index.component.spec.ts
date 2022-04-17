import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsIndexComponent } from './customer-details-index.component';

describe('CustomerDetailsIndexComponent', () => {
  let component: CustomerDetailsIndexComponent;
  let fixture: ComponentFixture<CustomerDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
