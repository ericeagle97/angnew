import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchKey: string;
  moviesList: Movie[] = [];
  searchedMoviesList: Movie[] = [];
  isAdmin: boolean;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {

    if (this.movieService.isAdmin) {
      this.moviesList = this.movieService.getMovies();
    } else {
      this.moviesList = this.movieService.getMoviesCustomer();
    }
    this.searchedMoviesList = this.moviesList;
  }



  search(value: string) {
    this.searchedMoviesList = this.moviesList.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()));
    this.movieService.getSubject().next(this.searchedMoviesList);
  }


}
