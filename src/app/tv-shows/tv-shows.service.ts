import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { TvShow } from '../models/tv-show';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private tvShowsUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1';

  private tvShows: any;

  constructor(private http: HttpClient) { }

  // renameKey(objectsOfArray: object[], old_key: keyof object, new_key: string): void {
  //   for (let obj of objectsOfArray) {
  //     if (old_key !== new_key) {
  //       // Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
  //       delete obj[old_key];
  //     }
  //   }
  // }

  // renameKey2(objectsOfArray: object[], old_key: string, new_key: string) {
  //   for (let obj of objectsOfArray) {
  //     (obj as any)[new_key] = (obj as any)[old_key];
  //     delete (obj as any)[old_key];
  //   }
  // }

  getTvShows(query: string): Observable<TvShow> {
    return this.http.get<Observable<any>>(`https://api.themoviedb.org/3/search/tv?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US&page=1&include_adult=false&query=${query}`)
      .pipe(map((i: any) => ({ ...i, results: i.results.map((item: any) => ({ ...item, ['title']: item.name })) })), tap(data => console.log(data)))

  }
}
