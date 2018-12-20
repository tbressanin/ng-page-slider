import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListGroupPageComponentComponent } from './hero-list-group-page-component.component';

describe('HeroListGroupPageComponentComponent', () => {
  let component: HeroListGroupPageComponentComponent;
  let fixture: ComponentFixture<HeroListGroupPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListGroupPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListGroupPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
