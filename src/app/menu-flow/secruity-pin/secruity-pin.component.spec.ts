import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecruityPinComponent } from './secruity-pin.component';

describe('SecruityPinComponent', () => {
  let component: SecruityPinComponent;
  let fixture: ComponentFixture<SecruityPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecruityPinComponent]
    });
    fixture = TestBed.createComponent(SecruityPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
