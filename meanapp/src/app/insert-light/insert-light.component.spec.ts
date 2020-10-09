import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLightComponent } from './insert-light.component';

describe('InsertLightComponent', () => {
  let component: InsertLightComponent;
  let fixture: ComponentFixture<InsertLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
