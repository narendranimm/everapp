import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardEComponent } from './addcard-e.component';

describe('AddcardEComponent', () => {
  let component: AddcardEComponent;
  let fixture: ComponentFixture<AddcardEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcardEComponent]
    });
    fixture = TestBed.createComponent(AddcardEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
