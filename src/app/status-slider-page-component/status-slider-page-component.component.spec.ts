import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSliderPageComponentComponent } from './status-slider-page-component.component';

describe('StatusSliderPageComponentComponent', () => {
  let component: StatusSliderPageComponentComponent;
  let fixture: ComponentFixture<StatusSliderPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSliderPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSliderPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
