import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingSummaryAfterCoupanComponent } from './booking-summary-after-coupan.component';

describe('BookingSummaryAfterCoupanComponent', () => {
  let component: BookingSummaryAfterCoupanComponent;
  let fixture: ComponentFixture<BookingSummaryAfterCoupanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSummaryAfterCoupanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingSummaryAfterCoupanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
