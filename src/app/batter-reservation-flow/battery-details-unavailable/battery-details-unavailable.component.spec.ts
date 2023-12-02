import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatteryDetailsUnavailableComponent } from './battery-details-unavailable.component';

describe('BatteryDetailsUnavailableComponent', () => {
  let component: BatteryDetailsUnavailableComponent;
  let fixture: ComponentFixture<BatteryDetailsUnavailableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryDetailsUnavailableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatteryDetailsUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
