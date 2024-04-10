import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-intro';
  name = 'Szymon';
  wynik = 2+3+7+9;
  counter = 0;
  mycolor = 'purple';
  people = [
    {name: "Szymon", age: 25},
    {name: "Natalia", age: 27}
  ]

  ngOnInit() {
    this.counter = 2;
    console.log("Done")
  }

  btnClicked = () =>{
    console.log('button has been clicked');
  }
  counterClick = () =>{
    this.counter ++;
    console.log('button has been clicked', this.counter);
  }
  changeColor = () =>{
    this.mycolor = 'green'
    console.log('Done')
  }
}
