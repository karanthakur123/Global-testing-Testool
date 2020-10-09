import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoiseSecondComponent } from './update-noise-second.component';

describe('UpdateNoiseSecondComponent', () => {
  let component: UpdateNoiseSecondComponent;
  let fixture: ComponentFixture<UpdateNoiseSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoiseSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoiseSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
