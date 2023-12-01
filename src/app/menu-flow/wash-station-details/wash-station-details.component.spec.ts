import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashStationDetailsComponent } from './wash-station-details.component';

describe('WashStationDetailsComponent', () => {
  let component: WashStationDetailsComponent;
  let fixture: ComponentFixture<WashStationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashStationDetailsComponent]
    });
    fixture = TestBed.createComponent(WashStationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
