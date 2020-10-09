import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLightDetailComponent } from './update-light-detail.component';

describe('UpdateLightDetailComponent', () => {
  let component: UpdateLightDetailComponent;
  let fixture: ComponentFixture<UpdateLightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
