import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormSelectComponent } from './bootstrap-form-select.component';

describe('BootstrapFormSelectComponent', () => {
  let component: BootstrapFormSelectComponent;
  let fixture: ComponentFixture<BootstrapFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapFormSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
