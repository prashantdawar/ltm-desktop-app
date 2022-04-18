import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsCreateComponent } from './customer-details-create.component';

describe('CustomerDetailsCreateComponent', () => {
  let component: CustomerDetailsCreateComponent;
  let fixture: ComponentFixture<CustomerDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
