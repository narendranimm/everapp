import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatusEComponent } from './booking-status-e.component';

describe('BookingStatusEComponent', () => {
  let component: BookingStatusEComponent;
  let fixture: ComponentFixture<BookingStatusEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingStatusEComponent]
    });
    fixture = TestBed.createComponent(BookingStatusEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
