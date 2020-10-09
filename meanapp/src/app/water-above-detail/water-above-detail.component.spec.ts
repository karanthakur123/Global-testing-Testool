import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAboveDetailComponent } from './water-above-detail.component';

describe('WaterAboveDetailComponent', () => {
  let component: WaterAboveDetailComponent;
  let fixture: ComponentFixture<WaterAboveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterAboveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterAboveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
