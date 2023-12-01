import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharComponent } from './adhar.component';

describe('AdharComponent', () => {
  let component: AdharComponent;
  let fixture: ComponentFixture<AdharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdharComponent]
    });
    fixture = TestBed.createComponent(AdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
