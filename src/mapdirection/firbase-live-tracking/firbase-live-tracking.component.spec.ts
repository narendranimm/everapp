import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirbaseLiveTrackingComponent } from './firbase-live-tracking.component';

describe('FirbaseLiveTrackingComponent', () => {
  let component: FirbaseLiveTrackingComponent;
  let fixture: ComponentFixture<FirbaseLiveTrackingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirbaseLiveTrackingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirbaseLiveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
