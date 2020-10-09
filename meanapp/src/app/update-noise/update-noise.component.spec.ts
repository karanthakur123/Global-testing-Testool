import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoiseComponent } from './update-noise.component';

describe('UpdateNoiseComponent', () => {
  let component: UpdateNoiseComponent;
  let fixture: ComponentFixture<UpdateNoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
