import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() movies: { title: string, description: string}[] = [];
  @Output() selectMovie = new EventEmitter();

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(){}

  movieClicked(movie: any){
    this.selectMovie.emit(movie)
  }
}
