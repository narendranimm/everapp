import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupiidEComponent } from './addupiid-e.component';

describe('AddupiidEComponent', () => {
  let component: AddupiidEComponent;
  let fixture: ComponentFixture<AddupiidEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddupiidEComponent]
    });
    fixture = TestBed.createComponent(AddupiidEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
