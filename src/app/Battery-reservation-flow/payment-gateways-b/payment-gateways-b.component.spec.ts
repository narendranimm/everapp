import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewaysBComponent } from './payment-gateways-b.component';

describe('PaymentGatewaysBComponent', () => {
  let component: PaymentGatewaysBComponent;
  let fixture: ComponentFixture<PaymentGatewaysBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentGatewaysBComponent]
    });
    fixture = TestBed.createComponent(PaymentGatewaysBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
