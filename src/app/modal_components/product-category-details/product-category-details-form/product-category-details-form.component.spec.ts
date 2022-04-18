import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDetailsFormComponent } from './product-category-details-form.component';

describe('ProductCategoryDetailsFormComponent', () => {
  let component: ProductCategoryDetailsFormComponent;
  let fixture: ComponentFixture<ProductCategoryDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
