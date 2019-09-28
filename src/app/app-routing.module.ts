import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './site/signup/signup.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieSearchComponent } from './movie/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { FavoritesComponent } from './favorite/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: FavoritesComponent,  },
  { path: 'edit/:id', component: MovieEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
