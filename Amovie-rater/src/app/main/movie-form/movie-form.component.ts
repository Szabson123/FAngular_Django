import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {

  @Input()
  movies = [];

  constructor (){ }

  ngOnInit(){}

}
