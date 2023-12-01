import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryBComponent } from './booking-summary-b.component';

describe('BookingSummaryBComponent', () => {
  let component: BookingSummaryBComponent;
  let fixture: ComponentFixture<BookingSummaryBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSummaryBComponent]
    });
    fixture = TestBed.createComponent(BookingSummaryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
