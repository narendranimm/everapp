import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Directionbtwn2pointsComponent } from './directionbtwn2points.component';

describe('Directionbtwn2pointsComponent', () => {
  let component: Directionbtwn2pointsComponent;
  let fixture: ComponentFixture<Directionbtwn2pointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Directionbtwn2pointsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Directionbtwn2pointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
