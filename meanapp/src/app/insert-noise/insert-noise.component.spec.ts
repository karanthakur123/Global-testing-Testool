import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNoiseComponent } from './insert-noise.component';

describe('InsertNoiseComponent', () => {
  let component: InsertNoiseComponent;
  let fixture: ComponentFixture<InsertNoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertNoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
