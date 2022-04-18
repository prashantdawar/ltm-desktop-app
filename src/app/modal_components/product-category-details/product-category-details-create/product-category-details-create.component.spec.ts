import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDetailsCreateComponent } from './product-category-details-create.component';

describe('ProductCategoryDetailsCreateComponent', () => {
  let component: ProductCategoryDetailsCreateComponent;
  let fixture: ComponentFixture<ProductCategoryDetailsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDetailsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryDetailsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
