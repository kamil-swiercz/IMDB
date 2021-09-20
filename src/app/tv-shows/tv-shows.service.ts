import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private tvShowsUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1';

  private tvShows: any;

  constructor(private http: HttpClient) { }



  getTvShows(query: string): Observable<any> {
    return this.http.get<Observable<any>>(`https://api.themoviedb.org/3/search/tv?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1&include_adult=false&query=${query}`)
      .pipe(
        tap(i => console.log(i)),
      )
  }
}
