import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyMobileComponent } from './emergency-mobile.component';

describe('EmergencyMobileComponent', () => {
  let component: EmergencyMobileComponent;
  let fixture: ComponentFixture<EmergencyMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyMobileComponent]
    });
    fixture = TestBed.createComponent(EmergencyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
