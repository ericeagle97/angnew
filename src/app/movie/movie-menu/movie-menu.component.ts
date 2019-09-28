import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-menu',
  templateUrl: './movie-menu.component.html',
  styleUrls: ['./movie-menu.component.css']
})
export class MovieMenuComponent implements OnInit {

  moviesList: Movie[];
  isAdmin: boolean = true;


  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.isAdmin = this.movieService.isAdmin;
    if (this.isAdmin) {
      this.moviesList = this.movieService.getMovies();
      this.movieService.getSubject().subscribe((data) => {
        this.moviesList = data;
      });
    } else {
      this.moviesList = this.movieService.getMoviesCustomer();
      this.movieService.getSubject().subscribe((data) => {
        this.moviesList = data;
      });
    }
  }
}
