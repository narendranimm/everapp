import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersApliedBComponent } from './offers-aplied-b.component';

describe('OffersApliedBComponent', () => {
  let component: OffersApliedBComponent;
  let fixture: ComponentFixture<OffersApliedBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersApliedBComponent]
    });
    fixture = TestBed.createComponent(OffersApliedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
