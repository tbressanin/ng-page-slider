import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAnimationsPageComponentComponent } from './toggle-animations-page-component.component';

describe('ToggleAnimationsPageComponentComponent', () => {
  let component: ToggleAnimationsPageComponentComponent;
  let fixture: ComponentFixture<ToggleAnimationsPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleAnimationsPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleAnimationsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
