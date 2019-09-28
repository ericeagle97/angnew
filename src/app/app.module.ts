import { MovieService } from './movie/movie.service';
import { AuthService } from 'src/app/site/auth.service';
import { UserService } from './site/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieMenuComponent } from './movie/movie-menu/movie-menu.component';
import { MovieSearchComponent } from './movie/search/search.component';
import { FavoritesComponent } from './favorite/favorites/favorites.component';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { FavoriteService } from './favorite/favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent,
    MovieEditComponent,
    MovieMenuComponent,
    MovieSearchComponent,
    FavoritesComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, AuthService, AuthGuardService, MovieService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
