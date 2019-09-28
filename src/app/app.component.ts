import { MovieService } from './movie/movie.service';
import { Component } from '@angular/core';
import { AuthService } from './site/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService, public router: Router, private movieService: MovieService) {

  }


  loggedIn(): boolean {
    if (this.authService.loggedInUser != null) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart() {
    this.movieService.clickedOnAdd = false;
    this.movieService.addedToFavorites = false;
  }

  logout() {
    this.authService.logout();
  }
}
