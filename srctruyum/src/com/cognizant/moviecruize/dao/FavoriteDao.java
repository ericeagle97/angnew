package com.cognizant.moviecruize.dao;

import java.util.List;

import com.cognizant.moviecruize.model.Movie;

public interface FavoriteDao {
	void addFavorite(String title, int movieId);
	void removeFavorite(String title, int movieId);
	List<Movie> viewFavorites();
}
