import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightAboveDetailComponent } from './light-above-detail.component';

describe('LightAboveDetailComponent', () => {
  let component: LightAboveDetailComponent;
  let fixture: ComponentFixture<LightAboveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightAboveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightAboveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
