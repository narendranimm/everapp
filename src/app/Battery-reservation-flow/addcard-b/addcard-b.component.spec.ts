import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardBComponent } from './addcard-b.component';

describe('AddcardBComponent', () => {
  let component: AddcardBComponent;
  let fixture: ComponentFixture<AddcardBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcardBComponent]
    });
    fixture = TestBed.createComponent(AddcardBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
