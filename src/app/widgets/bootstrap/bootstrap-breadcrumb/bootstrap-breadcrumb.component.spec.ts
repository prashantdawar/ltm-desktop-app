import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBreadcrumbComponent } from './bootstrap-breadcrumb.component';

describe('BootstrapBreadcrumbComponent', () => {
  let component: BootstrapBreadcrumbComponent;
  let fixture: ComponentFixture<BootstrapBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
