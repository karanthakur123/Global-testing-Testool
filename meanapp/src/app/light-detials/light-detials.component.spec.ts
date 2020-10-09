import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDetialsComponent } from './light-detials.component';

describe('LightDetialsComponent', () => {
  let component: LightDetialsComponent;
  let fixture: ComponentFixture<LightDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
