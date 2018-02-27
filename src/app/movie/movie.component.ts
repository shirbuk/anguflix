import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';
import Movie from '../model/movie';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : Movie
  isSavedMovie : boolean = false
  loading : boolean = false
  showAlert : boolean = false

  constructor(
    private movieService : MoviesService,
    private usersService : UsersService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.movieService.getMovie(params.id).subscribe(movie => {
        this.loading = false;
        this.movie = movie;
        this.isSavedMovie = this.checkIfSavedMovie();
      })
    })
  }

  addMovie() {
    var addResult = this.usersService.addSavedMovie(this.movie);
    addResult ? this.isSavedMovie = !this.isSavedMovie : this.showAlert = true;  
  }

  removeMovie() {
    this.usersService.removeSavedMovie(this.movie._id);
    this.isSavedMovie = !this.isSavedMovie;
  }

   checkIfSavedMovie() {
    return this.usersService.getUser().savedMovies.some(movie => movie._id == this.movie._id);
  }
  

}