import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListEnterLeavePageComponentComponent } from './hero-list-enter-leave-page-component.component';

describe('HeroListEnterLeavePageComponentComponent', () => {
  let component: HeroListEnterLeavePageComponentComponent;
  let fixture: ComponentFixture<HeroListEnterLeavePageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListEnterLeavePageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListEnterLeavePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
