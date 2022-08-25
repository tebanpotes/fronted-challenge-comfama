import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAnimeComponent } from './components/home-anime/home-anime.component';
import { ConfigService } from './services/config.service';
import { SearchComponent } from './components/search/search.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ExploreAnimesComponent } from './components/explore-animes/explore-animes.component';

function initializeApp(appConfig: ConfigService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeAnimeComponent,
    SearchComponent,
    MainContentComponent,
    ExploreAnimesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    CarouselModule,
    ButtonModule,
    RippleModule,
    NgxUiLoaderModule,
    PaginatorModule,
    DialogModule,
    SidebarModule
    
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
