import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/base/books/';


  private movies = ['terminator', 'predator'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies() {
    return this.httpClient.get(this.baseUrl);

  }

}
