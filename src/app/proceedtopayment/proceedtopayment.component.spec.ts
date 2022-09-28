import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedtopaymentComponent } from './proceedtopayment.component';

describe('ProceedtopaymentComponent', () => {
  let component: ProceedtopaymentComponent;
  let fixture: ComponentFixture<ProceedtopaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedtopaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedtopaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
