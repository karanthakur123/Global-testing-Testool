import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiseDetailComponent } from './noise-detail.component';

describe('NoiseDetailComponent', () => {
  let component: NoiseDetailComponent;
  let fixture: ComponentFixture<NoiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
