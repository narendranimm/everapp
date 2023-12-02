import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimeDetailsVehicleFromComponent } from './time-details-vehicle-from.component';

describe('TimeDetailsVehicleFromComponent', () => {
  let component: TimeDetailsVehicleFromComponent;
  let fixture: ComponentFixture<TimeDetailsVehicleFromComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDetailsVehicleFromComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeDetailsVehicleFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
