// tslint:disable-next-line:max-line-length
import { HeroListEnterLeavePageComponentComponent } from './hero-list-enter-leave-page-component/hero-list-enter-leave-page-component.component';

import { AboutComponentComponent } from './about-component/about-component.component';
import { HeroListAutoCalcPageComponentComponent } from './hero-list-auto-calc-page-component/hero-list-auto-calc-page-component.component';
import { HeroListGroupPageComponentComponent } from './hero-list-group-page-component/hero-list-group-page-component.component';
import { HeroListPageComponentComponent } from './hero-list-page-component/hero-list-page-component.component';
import { ToggleAnimationsPageComponentComponent } from './toggle-animations-page-component/toggle-animations-page-component.component';
import { OpenClosePageComponent } from './open-close-page/open-close-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { StatusSliderPageComponentComponent } from './status-slider-page-component/status-slider-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    OpenClosePageComponent,
    StatusSliderPageComponentComponent,
    StatusSliderPageComponentComponent,
    HeroListPageComponentComponent,
    HeroListGroupPageComponentComponent,
    HeroListEnterLeavePageComponentComponent,
    HeroListAutoCalcPageComponentComponent,
    HomeComponent,
    AboutComponentComponent,
    ToggleAnimationsPageComponentComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
      { path: 'open-close', component: OpenClosePageComponent },
      { path: 'status', component: StatusSliderPageComponentComponent },
      { path: 'toggle', component: ToggleAnimationsPageComponentComponent },
      { path: 'heroes', component: HeroListPageComponentComponent, data: { animation: 'FilterPage' } },
      { path: 'hero-groups', component: HeroListGroupPageComponentComponent },
      { path: 'enter-leave', component: HeroListEnterLeavePageComponentComponent },
      { path: 'auto', component: HeroListAutoCalcPageComponentComponent },
      { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
      { path: 'about', component: AboutComponentComponent, data: { animation: 'AboutPage' } },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
