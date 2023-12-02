import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingSummaryAppliedCouponComponent } from './booking-summary-applied-coupon.component';

describe('BookingSummaryAppliedCouponComponent', () => {
  let component: BookingSummaryAppliedCouponComponent;
  let fixture: ComponentFixture<BookingSummaryAppliedCouponComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSummaryAppliedCouponComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingSummaryAppliedCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
