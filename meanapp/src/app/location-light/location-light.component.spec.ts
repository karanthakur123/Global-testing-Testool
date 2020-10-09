import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLightComponent } from './location-light.component';

describe('LocationLightComponent', () => {
  let component: LocationLightComponent;
  let fixture: ComponentFixture<LocationLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
