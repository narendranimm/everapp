import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryBookingHomeComponent } from './battery-booking-home.component';

describe('BatteryBookingHomeComponent', () => {
  let component: BatteryBookingHomeComponent;
  let fixture: ComponentFixture<BatteryBookingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatteryBookingHomeComponent]
    });
    fixture = TestBed.createComponent(BatteryBookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
