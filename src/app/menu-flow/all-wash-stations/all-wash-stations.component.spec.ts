import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWashStationsComponent } from './all-wash-stations.component';

describe('AllWashStationsComponent', () => {
  let component: AllWashStationsComponent;
  let fixture: ComponentFixture<AllWashStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllWashStationsComponent]
    });
    fixture = TestBed.createComponent(AllWashStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
