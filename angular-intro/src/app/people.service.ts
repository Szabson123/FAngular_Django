import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

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
