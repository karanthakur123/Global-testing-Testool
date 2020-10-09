import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirComponent } from './view-air.component';

describe('ViewAirComponent', () => {
  let component: ViewAirComponent;
  let fixture: ComponentFixture<ViewAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
