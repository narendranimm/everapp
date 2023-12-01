import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCComponent } from './t-c.component';

describe('TCComponent', () => {
  let component: TCComponent;
  let fixture: ComponentFixture<TCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCComponent]
    });
    fixture = TestBed.createComponent(TCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
