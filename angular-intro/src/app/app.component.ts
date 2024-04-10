import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-intro';
  name = 'Szymon';
  wynik = 2+3+7+9;
  counter = 0
  people = [
    {name: "Szymon", age: 25},
    {name: "Natalia", age: 27}
  ]

  btnClicked = () =>{
    console.log('button has been clicked');
  }
  counterClick = () =>{
    this.counter ++;
    console.log('button has been clicked', this.counter);
  }
}
