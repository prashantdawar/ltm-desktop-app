import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDetailsIndexComponent } from './product-category-details-index.component';

describe('ProductCategoryDetailsIndexComponent', () => {
  let component: ProductCategoryDetailsIndexComponent;
  let fixture: ComponentFixture<ProductCategoryDetailsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDetailsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryDetailsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
