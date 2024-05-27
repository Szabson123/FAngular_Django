import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 405bb242bb8af79e86150c5c73cc48b7b92e4a25'
  });


  private movies = ['terminator', 'predator'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(): Observable<string[]> {
    return this.httpClient.get<{ title: string }[]>(this.baseUrl, { headers: this.headers}).pipe(map(response => response.map(movie => movie.title)))

  }

}
