import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseDetailsComponent } from './noise-details.component';

describe('NoiseDetailsComponent', () => {
  let component: NoiseDetailsComponent;
  let fixture: ComponentFixture<NoiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
