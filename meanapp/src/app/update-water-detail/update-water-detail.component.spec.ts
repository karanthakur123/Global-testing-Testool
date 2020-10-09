import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWaterDetailComponent } from './update-water-detail.component';

describe('UpdateWaterDetailComponent', () => {
  let component: UpdateWaterDetailComponent;
  let fixture: ComponentFixture<UpdateWaterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWaterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWaterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
