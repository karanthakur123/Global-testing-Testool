import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLightComponent } from './report-light.component';

describe('ReportLightComponent', () => {
  let component: ReportLightComponent;
  let fixture: ComponentFixture<ReportLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
