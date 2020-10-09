import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWaterComponent } from './insert-water.component';

describe('InsertWaterComponent', () => {
  let component: InsertWaterComponent;
  let fixture: ComponentFixture<InsertWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
