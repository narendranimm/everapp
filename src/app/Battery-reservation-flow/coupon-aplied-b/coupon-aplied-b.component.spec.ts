import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponApliedBComponent } from './coupon-aplied-b.component';

describe('CouponApliedBComponent', () => {
  let component: CouponApliedBComponent;
  let fixture: ComponentFixture<CouponApliedBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponApliedBComponent]
    });
    fixture = TestBed.createComponent(CouponApliedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
