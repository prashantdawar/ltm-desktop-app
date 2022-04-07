import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsIndexComponent } from './product-details-index.component';

describe('ProductDetailsIndexComponent', () => {
  let component: ProductDetailsIndexComponent;
  let fixture: ComponentFixture<ProductDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
