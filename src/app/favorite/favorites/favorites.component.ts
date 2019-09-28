import { MovieService } from './../../movie/movie.service';
import { Movie } from './../../movie/Movie';
import { Favorites } from './../Favorites';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Favorites;
  favoritesList: Movie[];
  constructor(private favortieService: FavoriteService, private movieService: MovieService) {
  }

  ngOnInit() {
    this.favortieService.calcTotal();
    this.favorites = this.favortieService.getFavorites();
    this.favoritesList = this.favorites.favorites;
  }

}
