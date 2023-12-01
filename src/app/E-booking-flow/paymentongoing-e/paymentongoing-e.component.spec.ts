import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentongoingEComponent } from './paymentongoing-e.component';

describe('PaymentongoingEComponent', () => {
  let component: PaymentongoingEComponent;
  let fixture: ComponentFixture<PaymentongoingEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentongoingEComponent]
    });
    fixture = TestBed.createComponent(PaymentongoingEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
