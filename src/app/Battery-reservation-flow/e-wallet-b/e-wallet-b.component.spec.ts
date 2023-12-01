import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWalletBComponent } from './e-wallet-b.component';

describe('EWalletBComponent', () => {
  let component: EWalletBComponent;
  let fixture: ComponentFixture<EWalletBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EWalletBComponent]
    });
    fixture = TestBed.createComponent(EWalletBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
