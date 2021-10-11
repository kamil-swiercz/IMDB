import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1';

  constructor(private http: HttpClient) { }

  
  getMovies(query: string): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/search/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1&include_adult=false&query=${query}`)
      .pipe(
        tap(i => console.log(i))
      )
  }

}
