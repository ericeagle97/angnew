import { MovieService } from './../movie/movie.service';
import { Injectable } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: User;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  constructor(private userService: UserService, private movieService: MovieService, public router: Router) { }

  authenticateUser(username: string, password: string): boolean {
    let userList = this.userService.getUsers();
    for (let user of userList) {
      if (user.userName == username && user.password == password) {
        this.loggedInUser = user;
        if (user.userName == 'admin' && user.password == 'adminadmin') {
          this.movieService.isAdmin = true;
        }
        this.validCredentials = true;
        this.loggedIn = true;
        this.movieService.isLoggedIn = true;
        this.name = this.userService.getUsers().find((u) => user.userName == u.userName).firstName;
        this.router.navigate(['']);
        return true;
      }
    }
    this.validCredentials = false;
    return false;
  }

  logout() {
    this.loggedInUser = null;
    this.movieService.isAdmin = false;
    this.loggedIn = false;
    this.movieService.isLoggedIn = false;
    this.movieService.clickedOnAdd = false;
    this.movieService.addedToFavorites = false;
    this.router.navigate(['login']);
  }
}
