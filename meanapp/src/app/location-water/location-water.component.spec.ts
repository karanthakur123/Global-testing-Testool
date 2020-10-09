import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWaterComponent } from './location-water.component';

describe('LocationWaterComponent', () => {
  let component: LocationWaterComponent;
  let fixture: ComponentFixture<LocationWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
