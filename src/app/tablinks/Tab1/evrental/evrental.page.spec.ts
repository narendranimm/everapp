import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvrentalPage } from './evrental.page';

describe('EvrentalPage', () => {
  let component: EvrentalPage;
  let fixture: ComponentFixture<EvrentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EvrentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
