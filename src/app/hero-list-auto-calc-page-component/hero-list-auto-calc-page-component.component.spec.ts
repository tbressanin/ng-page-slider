import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoCalcPageComponentComponent } from './hero-list-auto-calc-page-component.component';

describe('HeroListAutoCalcPageComponentComponent', () => {
  let component: HeroListAutoCalcPageComponentComponent;
  let fixture: ComponentFixture<HeroListAutoCalcPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListAutoCalcPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListAutoCalcPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
