import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwapstationsPage } from './swapstations.page';

describe('SwapstationsPage', () => {
  let component: SwapstationsPage;
  let fixture: ComponentFixture<SwapstationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwapstationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
