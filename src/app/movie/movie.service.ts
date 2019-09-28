import { Router } from '@angular/router';
import { FavoriteService } from './../favorite/favorite.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private subject = new Subject<Movie[]>();
  isAdmin = false;
  addedToFavorites = false;
  favoritesAddedId: number;
  movieList: Movie[];
  isLoggedIn = false;
  clickedOnAdd = false;

  constructor(private favoritesService: FavoriteService, private router: Router) {

    this.movieList = [
      {
        id: 1,
        title: 'Avatar',
        boxOffice: 2787965087,
        active: true,
        dateOfLaunch: new Date(2017, 11, 23),
        genre: "Science Fiction",
        hasTeaser: true,
        imageUrl: "https://i1.wp.com/www.focusmagazine.in/wp-content/uploads/2011/09/avatar-movie.jpg?fit=1600%2C900&ssl=1"
      },
      {
        id: 2,
        title: 'The Avengers',
        boxOffice: 1518812988,
        active: true,
        dateOfLaunch: new Date(2017, 11, 27),
        genre: "Superhero",
        hasTeaser: false,
        imageUrl: "https://3.bp.blogspot.com/-mbC9OdJWYZQ/XImZzd1Cj7I/AAAAAAAAACY/fub5dV5hFdQzhkGDgPmIKQAVcctKFY0_ACLcBGAs/s1600/Avengers-movie-download.jpg"
      },
      {
        id: 3,
        title: 'Titanic',
        boxOffice: 2187463944,
        active: true,
        dateOfLaunch: new Date(2018, 7, 21),
        genre: "Romance",
        hasTeaser: false,
        imageUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/26/10/titanic.jpg?w968h681"
      },
      {
        id: 4,
        title: 'Jurassic World',
        boxOffice: 1671713208,
        active: false,
        dateOfLaunch: new Date(2017, 6, 2),
        genre: "Science Fiction",
        hasTeaser: true,
        imageUrl: "https://www.pixelstalk.net/wp-content/uploads/images1/Jurassic-World-Wallpapers-HD-620x349.jpg"
      },
      {
        id: 5,
        title: 'Avengers: End Game',
        boxOffice: 2570760348,
        active: true,
        dateOfLaunch: new Date(2022, 10, 2),
        genre: "Superhero",
        hasTeaser: true,
        imageUrl: "https://www.soyacincau.com/wp-content/uploads/2019/08/20190804-Avengers_Endgame_KATT_English_2560x1422.jpeg"
      }

    ];
  }

  getSubject(): Subject<Movie[]> {
    return this.subject;
  }

  getMovies() {
    return this.movieList;
  }

  getMoviesCustomer() {
    return this.movieList.filter((movie) => movie.active && movie.dateOfLaunch <= new Date());
  }

  addToFavorites(movieId: number) {
    if (this.isLoggedIn) {
      for (const movie of this.movieList) {
        if (movie.id == movieId) {
          this.favoritesService.getFavorites().favorites.push(movie);
          this.favoritesService.calcTotal();
          this.addedToFavorites = true;
          this.favoritesAddedId = movieId;
        }
      }
    } else {
      this.clickedOnAdd = true;
      this.router.navigate(['login']);
    }
  }

  removeFromFavorites(movieId: number) {
    for (let i = 0; i < this.favoritesService.getFavorites().favorites.length; i++) {
      if (this.favoritesService.getFavorites().favorites[i].id === movieId) {
        this.favoritesService.getFavorites().favorites.splice(i, 1);
        this.favoritesService.calcTotal();
        break;
      }
    }
  }



  updateMovie(movie: Movie) {
    let count = 0;
    for (let movieItem of this.getMovies()) {
      if (movieItem.id === movie.id) {
        this.movieList[count] = movie;
        break;
      }
      count++;
    }
  }


}
