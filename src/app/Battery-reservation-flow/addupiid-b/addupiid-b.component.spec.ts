import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupiidBComponent } from './addupiid-b.component';

describe('AddupiidBComponent', () => {
  let component: AddupiidBComponent;
  let fixture: ComponentFixture<AddupiidBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddupiidBComponent]
    });
    fixture = TestBed.createComponent(AddupiidBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
