import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPagesComponent} from './main-pages/main-pages.component';
import {HttpClientModule} from '@angular/common/http';
import {RequestDataService} from './main-pages/shared/request-data.service';
import {RouterModule} from '@angular/router';
import { SliderPartComponent } from './main-pages/slider-part/slider-part.component';
import { GoodPropositionsPartComponent } from './main-pages/good-propositions-part/good-propositions-part.component';
import { NewPropositionsPartComponent } from './main-pages/new-propositions-part/new-propositions-part.component';
import { CategoryPartComponent } from './main-pages/category-part/category-part.component';
import { BrandsPartComponent } from './main-pages/brands-part/brands-part.component';
import { ReviewsPartComponent } from './main-pages/reviews-part/reviews-part.component';
import { LatestBlogPartComponent } from './main-pages/latest-blog-part/latest-blog-part.component';
import {BlogIframePipe} from './main-pages/shared/blog-iframe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {SwiperModule} from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
    SliderPartComponent,
    GoodPropositionsPartComponent,
    NewPropositionsPartComponent,
    CategoryPartComponent,
    BrandsPartComponent,
    ReviewsPartComponent,
    LatestBlogPartComponent,
    BlogIframePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    RouterModule,
    NgbModule,
    MdbModule,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  providers: [RequestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
