import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MoviesService } from '../movies/movies.service';
import { QueryService } from '../query.service';
import { TvShowsService } from './tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  public tvShows$!: Observable<any>;

  constructor(private tvShowsService: TvShowsService, private queryService: QueryService) { }

  ngOnInit(): void {
    this.tvShows$ = this.queryService.query.pipe(
      switchMap(data => this.tvShowsService.getTvShows(data)),
      // tap(i => console.warn(i))
    )
  }

}
