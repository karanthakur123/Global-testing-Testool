import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirAboveDetailsComponent } from './view-air-above-details.component';

describe('ViewAirAboveDetailsComponent', () => {
  let component: ViewAirAboveDetailsComponent;
  let fixture: ComponentFixture<ViewAirAboveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAirAboveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirAboveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
