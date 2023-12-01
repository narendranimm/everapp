import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOngoingBComponent } from './payment-ongoing-b.component';

describe('PaymentOngoingBComponent', () => {
  let component: PaymentOngoingBComponent;
  let fixture: ComponentFixture<PaymentOngoingBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentOngoingBComponent]
    });
    fixture = TestBed.createComponent(PaymentOngoingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
