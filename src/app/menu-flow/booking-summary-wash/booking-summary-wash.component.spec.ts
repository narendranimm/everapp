import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryWashComponent } from './booking-summary-wash.component';

describe('BookingSummaryWashComponent', () => {
  let component: BookingSummaryWashComponent;
  let fixture: ComponentFixture<BookingSummaryWashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingSummaryWashComponent]
    });
    fixture = TestBed.createComponent(BookingSummaryWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
