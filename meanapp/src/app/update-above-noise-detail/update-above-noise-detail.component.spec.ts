import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboveNoiseDetailComponent } from './update-above-noise-detail.component';

describe('UpdateAboveNoiseDetailComponent', () => {
  let component: UpdateAboveNoiseDetailComponent;
  let fixture: ComponentFixture<UpdateAboveNoiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAboveNoiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAboveNoiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
