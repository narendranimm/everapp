import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookingsCurrentStatusComponent } from './my-bookings-current-status.component';

describe('MyBookingsCurrentStatusComponent', () => {
  let component: MyBookingsCurrentStatusComponent;
  let fixture: ComponentFixture<MyBookingsCurrentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookingsCurrentStatusComponent]
    });
    fixture = TestBed.createComponent(MyBookingsCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
