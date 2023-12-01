import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAppliedComponent } from './coupon-applied.component';

describe('CouponAppliedComponent', () => {
  let component: CouponAppliedComponent;
  let fixture: ComponentFixture<CouponAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponAppliedComponent]
    });
    fixture = TestBed.createComponent(CouponAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
