package com.cognizant.moviecruize.model;

import java.util.List;

public class Favorites {
	private List<Movie> favoriteList;
	private int totalFavorites;
	public Favorites() {
		super();
	}
	public List<Movie> getFavoriteList() {
		return favoriteList;
	}
	public void setFavoriteList(List<Movie> favoriteList) {
		this.favoriteList = favoriteList;
	}
	public int getTotalFavorites() {
		return totalFavorites;
	}
	public void setTotalFavorites(int totalFavorites) {
		this.totalFavorites = totalFavorites;
	}
	@Override
	public String toString() {
		return "Favorites [favoriteList=" + favoriteList + ", totalFavorites=" + totalFavorites + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((favoriteList == null) ? 0 : favoriteList.hashCode());
		result = prime * result + totalFavorites;
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
		Favorites other = (Favorites) obj;
		if (favoriteList == null) {
			if (other.favoriteList != null)
				return false;
		} else if (!favoriteList.equals(other.favoriteList))
			return false;
		if (totalFavorites != other.totalFavorites)
			return false;
		return true;
	}
	
}
