import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // Poprawiono styleUrl na styleUrls
})
export class MainComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => console.log(error)
    );
  }

  selectMovie(movie: { title: string, description: string }) { 
    this.selectedMovie = movie; 
    console.log('selectedMovie', this.selectedMovie);
  }
}
