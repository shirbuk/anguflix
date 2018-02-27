import { Component, OnInit } from '@angular/core';
import Movie from '../model/movie';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
movies: Movie[]

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getSavedMovies();
  }

  removeMovie(movie) {
    this.usersService.removeSavedMovie(movie._id);
    this.setSavedMovies();
  }

  setSavedMovies(){
    this.usersService.getUser().savedMovies;
  }

  getSavedMovies(){
    this.movies = this.usersService.getSavedMovies()
  }


}
