import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsCreateComponent } from './order-details-create.component';

describe('OrderDetailsCreateComponent', () => {
  let component: OrderDetailsCreateComponent;
  let fixture: ComponentFixture<OrderDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
