import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLightComponent } from './view-light.component';

describe('ViewLightComponent', () => {
  let component: ViewLightComponent;
  let fixture: ComponentFixture<ViewLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
