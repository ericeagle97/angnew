package com.cognizant.moviecruize.model;

import java.util.Date;
import java.util.List;

public class Movie {
	private int movieId;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Title == null) ? 0 : Title.hashCode());
		result = prime * result + (active ? 1231 : 1237);
		result = prime * result + (int) (boxOffice ^ (boxOffice >>> 32));
		result = prime * result + ((dateOfLaunch == null) ? 0 : dateOfLaunch.hashCode());
		result = prime * result + ((genre == null) ? 0 : genre.hashCode());
		result = prime * result + (hasTeaser ? 1231 : 1237);
		result = prime * result + movieId;
		result = prime * result + ((movieList == null) ? 0 : movieList.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movie other = (Movie) obj;
		if (Title == null) {
			if (other.Title != null)
				return false;
		} else if (!Title.equals(other.Title))
			return false;
		if (active != other.active)
			return false;
		if (boxOffice != other.boxOffice)
			return false;
		if (dateOfLaunch == null) {
			if (other.dateOfLaunch != null)
				return false;
		} else if (!dateOfLaunch.equals(other.dateOfLaunch))
			return false;
		if (genre == null) {
			if (other.genre != null)
				return false;
		} else if (!genre.equals(other.genre))
			return false;
		if (hasTeaser != other.hasTeaser)
			return false;
		if (movieId != other.movieId)
			return false;
		if (movieList == null) {
			if (other.movieList != null)
				return false;
		} else if (!movieList.equals(other.movieList))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", movieList=" + movieList + ", Title=" + Title + ", boxOffice="
				+ boxOffice + ", active=" + active + ", dateOfLaunch=" + dateOfLaunch + ", genre=" + genre
				+ ", hasTeaser=" + hasTeaser + "]";
	}
	public int getMovieId() {
		return movieId;
	}
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	public List<Movie> getMovieList() {
		return movieList;
	}
	public void setMovieList(List<Movie> movieList) {
		this.movieList = movieList;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public long getBoxOffice() {
		return boxOffice;
	}
	public void setBoxOffice(long boxOffice) {
		this.boxOffice = boxOffice;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Date getDateOfLaunch() {
		return dateOfLaunch;
	}
	public void setDateOfLaunch(Date dateOfLaunch) {
		this.dateOfLaunch = dateOfLaunch;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public boolean isHasTeaser() {
		return hasTeaser;
	}
	public void setHasTeaser(boolean hasTeaser) {
		this.hasTeaser = hasTeaser;
	}
	private List<Movie> movieList; 
	private String Title;
	private long boxOffice;
	private boolean active;
	Date dateOfLaunch;
	private String genre;
	private boolean hasTeaser;
	public Movie() {
		super();
	}
	
	
}
