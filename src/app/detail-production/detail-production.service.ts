import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailProductionService {

  constructor(private http: HttpClient) { }

  getDetailProduction(id: number, category: string): Observable<any> {
    if (category === 'movies') {
      return this.http.get<Observable<any>>(`https://api.themoviedb.org/3/movie/${id}?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US`)
      .pipe(
        tap(i => console.log(i))
      )
    }
    if (category === 'tv-shows') {
      return this.http.get<Observable<any>>(`https://api.themoviedb.org/3/tv/${id}?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US`)
      .pipe(
        tap(i => console.log(i))
      )
    }
    return new Observable();
  }
}
