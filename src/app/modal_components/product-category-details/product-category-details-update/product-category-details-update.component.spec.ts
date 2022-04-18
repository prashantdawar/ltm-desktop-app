import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDetailsUpdateComponent } from './product-category-details-update.component';

describe('ProductCategoryDetailsUpdateComponent', () => {
  let component: ProductCategoryDetailsUpdateComponent;
  let fixture: ComponentFixture<ProductCategoryDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
