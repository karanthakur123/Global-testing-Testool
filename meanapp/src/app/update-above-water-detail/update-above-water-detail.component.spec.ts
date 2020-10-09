import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboveWaterDetailComponent } from './update-above-water-detail.component';

describe('UpdateAboveWaterDetailComponent', () => {
  let component: UpdateAboveWaterDetailComponent;
  let fixture: ComponentFixture<UpdateAboveWaterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAboveWaterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAboveWaterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
