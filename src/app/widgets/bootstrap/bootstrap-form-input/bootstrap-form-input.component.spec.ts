import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormInputComponent } from './bootstrap-form-input.component';

describe('BootstrapFormInputComponent', () => {
  let component: BootstrapFormInputComponent;
  let fixture: ComponentFixture<BootstrapFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
