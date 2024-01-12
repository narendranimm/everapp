import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapdirectionPage } from './mapdirection.page';

describe('MapdirectionPage', () => {
  let component: MapdirectionPage;
  let fixture: ComponentFixture<MapdirectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapdirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
