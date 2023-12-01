import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeWashComponent } from './date-time-wash.component';

describe('DateTimeWashComponent', () => {
  let component: DateTimeWashComponent;
  let fixture: ComponentFixture<DateTimeWashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateTimeWashComponent]
    });
    fixture = TestBed.createComponent(DateTimeWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
