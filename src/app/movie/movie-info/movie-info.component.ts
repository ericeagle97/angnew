import { Movie } from './../Movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/site/auth.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

 
  @Input() movie: Movie;
  @Output() addToFavoritesClicked = new EventEmitter();
  isAdmin: boolean = false;
  favoritesAddedId: number;

  constructor(private movieService: MovieService, private authService: AuthService) {

  }

  ngOnInit() {
    this.isAdmin = this.movieService.isAdmin;
  }

  displayAddToFavorites(id: number) {
    this.favoritesAddedId = id;
    console.log(this.favoritesAddedId)
  }

}
