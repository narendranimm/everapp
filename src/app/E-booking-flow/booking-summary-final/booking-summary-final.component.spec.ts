import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryFinalComponent } from './booking-summary-final.component';

describe('BookingSummaryFinalComponent', () => {
  let component: BookingSummaryFinalComponent;
  let fixture: ComponentFixture<BookingSummaryFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSummaryFinalComponent]
    });
    fixture = TestBed.createComponent(BookingSummaryFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
