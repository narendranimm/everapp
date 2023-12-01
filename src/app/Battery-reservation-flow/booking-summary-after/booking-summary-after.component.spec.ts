import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryAfterComponent } from './booking-summary-after.component';

describe('BookingSummaryAfterComponent', () => {
  let component: BookingSummaryAfterComponent;
  let fixture: ComponentFixture<BookingSummaryAfterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSummaryAfterComponent]
    });
    fixture = TestBed.createComponent(BookingSummaryAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
