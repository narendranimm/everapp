import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOtpComponent } from './get-otp.component';

describe('GetOtpComponent', () => {
  let component: GetOtpComponent;
  let fixture: ComponentFixture<GetOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOtpComponent]
    });
    fixture = TestBed.createComponent(GetOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
