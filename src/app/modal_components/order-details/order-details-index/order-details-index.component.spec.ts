import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsIndexComponent } from './order-details-index.component';

describe('OrderDetailsIndexComponent', () => {
  let component: OrderDetailsIndexComponent;
  let fixture: ComponentFixture<OrderDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
