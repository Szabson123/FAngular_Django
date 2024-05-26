import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: string[] = [];

  constructor(
    private apiSerivce: ApiService
  ) {}

  ngOnInit(){
    this.movies = this.apiSerivce.getMovies();
  }
}
