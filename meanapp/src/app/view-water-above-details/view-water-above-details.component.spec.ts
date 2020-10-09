import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaterAboveDetailsComponent } from './view-water-above-details.component';

describe('ViewWaterAboveDetailsComponent', () => {
  let component: ViewWaterAboveDetailsComponent;
  let fixture: ComponentFixture<ViewWaterAboveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWaterAboveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWaterAboveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
