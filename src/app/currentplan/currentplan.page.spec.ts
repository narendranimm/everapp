import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentplanPage } from './currentplan.page';

describe('CurrentplanPage', () => {
  let component: CurrentplanPage;
  let fixture: ComponentFixture<CurrentplanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CurrentplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
