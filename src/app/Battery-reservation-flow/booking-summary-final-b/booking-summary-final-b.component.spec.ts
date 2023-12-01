import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryFinalBComponent } from './booking-summary-final-b.component';

describe('BookingSummaryFinalBComponent', () => {
  let component: BookingSummaryFinalBComponent;
  let fixture: ComponentFixture<BookingSummaryFinalBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSummaryFinalBComponent]
    });
    fixture = TestBed.createComponent(BookingSummaryFinalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
