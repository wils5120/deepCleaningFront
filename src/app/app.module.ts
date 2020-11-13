import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderHomeComponent } from './home/slider-home/slider-home.component';
import { SliderGalleryComponent } from './home/slider-gallery/slider-gallery.component';
import { ServicesComponent } from './home/services/services.component';
import { WhyChoseComponent } from './home/why-chose/why-chose.component';
import { CovidComponent } from './home/covid/covid.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { SocialComponent } from './social/social.component';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderHomeComponent,
    SliderGalleryComponent,
    ServicesComponent,
    WhyChoseComponent,
    CovidComponent,
    MenuComponent,
    FooterComponent,
    MapComponent,
    SocialComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
