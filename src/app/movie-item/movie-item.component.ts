import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Movie from '../model/movie';
import '../model/movie';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movie: Movie = new Movie(); 
@Output() addMovieClicked: EventEmitter<Movie> = new EventEmitter<Movie>();
@Output() removeMovieClicked : EventEmitter<Movie> = new EventEmitter<Movie>();
@Input() removeMode : boolean
  constructor() { }

  ngOnInit() {
  }

  addMovie() {
    this.addMovieClicked.emit(this.movie);
  }


  removeMovie() {
    this.removeMovieClicked.emit(this.movie);
  }

}
