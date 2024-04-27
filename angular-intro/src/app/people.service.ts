import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  newObservable$ = new Observable( observer => {
    observer.next('hello');
  });

  people = [
    {name: "Szymon", age: 25},
    {name: "Natalia", age: 27},
    {name: "Kamil", age: 35},
  ]

  constructor() { }
  // We can call external API
  allPeople () {
    return this.people;
  }
}
