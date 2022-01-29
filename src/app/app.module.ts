import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { DjilaliComponent } from './djilali/djilali.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { DjilaliListComponent } from './djilali-list/djilali-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { PageIdComponent } from './page-id/page-id.component';


@NgModule({
  declarations: [
    AppComponent,
    DjilaliComponent,
    DjilaliListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    PageIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
