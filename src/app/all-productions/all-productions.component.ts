import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { MoviesService } from '../movies/movies.service';
import { QueryService } from '../query.service';
import { TvShowsService } from '../tv-shows/tv-shows.service';

@Component({
  selector: 'app-all-productions',
  templateUrl: './all-productions.component.html',
  styleUrls: ['./all-productions.component.css']
})
export class AllProductionsComponent implements OnInit {

  allProductions$!: Observable<any>;
  public movies$!: Observable<any>;
  public tvShows$!: Observable<any>;

  constructor(private moviesService: MoviesService,
              private tvShowsService: TvShowsService,
              private queryService: QueryService) { }


  ngOnInit(): void {
    this.movies$ = this.queryService.query.pipe(
      switchMap(data => this.moviesService.getMovies(data)),
      tap(i => console.log(i))
    )

    this.tvShows$ = this.queryService.query.pipe(
      switchMap(data => this.tvShowsService.getTvShows(data)),
      tap(i => console.warn(i))
    )

    this.allProductions$ = combineLatest([this.movies$, this.tvShows$]).pipe(
      map(([movies, tvShows]) => movies.results.concat(tvShows.results)),
    )
  }

}
