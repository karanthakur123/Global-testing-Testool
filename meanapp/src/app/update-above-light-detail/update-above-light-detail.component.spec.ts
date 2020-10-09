import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAboveLightDetailComponent } from './update-above-light-detail.component';

describe('UpdateAboveLightDetailComponent', () => {
  let component: UpdateAboveLightDetailComponent;
  let fixture: ComponentFixture<UpdateAboveLightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAboveLightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAboveLightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
