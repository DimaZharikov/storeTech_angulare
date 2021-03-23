import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPagesComponent} from './main-pages/main-pages.component';
import {HttpClientModule} from '@angular/common/http';
import {SliderService} from './main-pages/shared/slider.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
