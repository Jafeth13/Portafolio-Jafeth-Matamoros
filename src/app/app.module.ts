import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NguCarouselModule } from '@ngu/carousel';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AboutMeComponent } from './about-me/about-me.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutMeComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule ,
    NguCarouselModule,
    YouTubePlayerModule,MatCardModule,MatButtonModule,MatProgressBarModule,MatIconModule,MatToolbarModule
    ,MatSidenavModule,MatDividerModule,NgxTypedJsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
