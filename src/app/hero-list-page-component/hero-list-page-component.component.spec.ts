import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListPageComponentComponent } from './hero-list-page-component.component';

describe('HeroListPageComponentComponent', () => {
  let component: HeroListPageComponentComponent;
  let fixture: ComponentFixture<HeroListPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
