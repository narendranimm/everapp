import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwalletEComponent } from './ewallet-e.component';

describe('EwalletEComponent', () => {
  let component: EwalletEComponent;
  let fixture: ComponentFixture<EwalletEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EwalletEComponent]
    });
    fixture = TestBed.createComponent(EwalletEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
