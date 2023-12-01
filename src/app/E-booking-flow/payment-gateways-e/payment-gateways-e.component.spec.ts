import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewaysEComponent } from './payment-gateways-e.component';

describe('PaymentGatewaysEComponent', () => {
  let component: PaymentGatewaysEComponent;
  let fixture: ComponentFixture<PaymentGatewaysEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentGatewaysEComponent]
    });
    fixture = TestBed.createComponent(PaymentGatewaysEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
