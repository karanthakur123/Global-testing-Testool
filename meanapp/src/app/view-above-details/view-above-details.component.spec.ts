import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboveDetailsComponent } from './view-above-details.component';

describe('ViewAboveDetailsComponent', () => {
  let component: ViewAboveDetailsComponent;
  let fixture: ComponentFixture<ViewAboveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAboveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAboveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
