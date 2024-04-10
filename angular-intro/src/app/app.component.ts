import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

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
  people: { name: string; age: number; }[] = []; 
  today = new Date()
  cash = 2 
  constructor(private peopleService: PeopleService){}


  ngOnInit() {
    this.counter = 2;
    console.log("Done")
    this.people = this.peopleService.allPeople();
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
