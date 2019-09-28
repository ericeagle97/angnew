import { Favorites } from './Favorites';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  
  @Output() favoritesUpdated = new EventEmitter();
  favorites: Favorites = { favorites: [], total: 0 };


  constructor() { }

  
  calcTotal() {
    this.favorites.total = this.favorites.favorites.length;
    this.favoritesUpdated.emit;
  }

  getFavoriteList() {
    return this.favorites.favorites;
  }

  getFavorites() {
    return this.favorites;
  }
}
