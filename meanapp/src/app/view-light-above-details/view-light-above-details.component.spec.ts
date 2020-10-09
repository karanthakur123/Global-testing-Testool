import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLightAboveDetailsComponent } from './view-light-above-details.component';

describe('ViewLightAboveDetailsComponent', () => {
  let component: ViewLightAboveDetailsComponent;
  let fixture: ComponentFixture<ViewLightAboveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLightAboveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLightAboveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
