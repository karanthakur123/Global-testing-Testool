import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseDetailsSecondComponent } from './noise-details-second.component';

describe('NoiseDetailsSecondComponent', () => {
  let component: NoiseDetailsSecondComponent;
  let fixture: ComponentFixture<NoiseDetailsSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseDetailsSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseDetailsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
