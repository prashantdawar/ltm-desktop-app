import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDetailsViewComponent } from './product-category-details-view.component';

describe('ProductCategoryDetailsViewComponent', () => {
  let component: ProductCategoryDetailsViewComponent;
  let fixture: ComponentFixture<ProductCategoryDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
