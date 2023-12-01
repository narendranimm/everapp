import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyVerifiedComponent } from './emergency-verified.component';

describe('EmergencyVerifiedComponent', () => {
  let component: EmergencyVerifiedComponent;
  let fixture: ComponentFixture<EmergencyVerifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyVerifiedComponent]
    });
    fixture = TestBed.createComponent(EmergencyVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
