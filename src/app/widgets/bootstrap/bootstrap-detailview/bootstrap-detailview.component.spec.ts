import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDetailviewComponent } from './bootstrap-detailview.component';

describe('BootstrapDetailviewComponent', () => {
  let component: BootstrapDetailviewComponent;
  let fixture: ComponentFixture<BootstrapDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapDetailviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
