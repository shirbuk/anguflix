import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import Movie from '../model/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  budget : number = 0;

  constructor(private usersService : UsersService , private route: ActivatedRoute) { }

  ngOnInit() {

  }

}