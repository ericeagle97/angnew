package com.cognizant.moviecruize.dao;

import java.util.List;
import com.cognizant.moviecruize.model.Movie;

public interface MovieDao {
	List<Movie>viewMovieListAdmin();
	List<Movie>viewMovieListCustomer();
	Movie editMovie(Movie movie);
	Movie viewMovie(int movieId);
}
