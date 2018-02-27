import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { SearchComponent } from './search/search.component';
import { YearFilterComponent } from './year-filter/year-filter.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { IngtAlertComponent } from './ingt-alert/ingt-alert.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './users.service';
import { MoviesService } from './movie.service';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AllMoviesComponent,
    MyMoviesComponent,
    SearchComponent,
    YearFilterComponent,
    LoadingIndicatorComponent,
    IngtAlertComponent,
    MovieItemComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'anguflix',
      storageType: 'localStorage'
    }),
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot()
  ],
  providers: [UsersService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
