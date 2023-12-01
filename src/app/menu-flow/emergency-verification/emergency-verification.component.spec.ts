import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyVerificationComponent } from './emergency-verification.component';

describe('EmergencyVerificationComponent', () => {
  let component: EmergencyVerificationComponent;
  let fixture: ComponentFixture<EmergencyVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyVerificationComponent]
    });
    fixture = TestBed.createComponent(EmergencyVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
