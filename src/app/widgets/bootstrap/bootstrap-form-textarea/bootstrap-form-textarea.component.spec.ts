import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormTextareaComponent } from './bootstrap-form-textarea.component';

describe('BootstrapFormTextareaComponent', () => {
  let component: BootstrapFormTextareaComponent;
  let fixture: ComponentFixture<BootstrapFormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapFormTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
