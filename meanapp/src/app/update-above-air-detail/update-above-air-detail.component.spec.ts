import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboveAirDetailComponent } from './update-above-air-detail.component';

describe('UpdateAboveAirDetailComponent', () => {
  let component: UpdateAboveAirDetailComponent;
  let fixture: ComponentFixture<UpdateAboveAirDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAboveAirDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAboveAirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
