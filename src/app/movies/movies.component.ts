import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { QueryService } from '../query.service';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies$!: Observable<Movie>;

  constructor(private moviesService: MoviesService, private queryService: QueryService) { }

  ngOnInit(): void {
      this.movies$ = this.queryService.query.pipe(
      switchMap(data => this.moviesService.getMovies(data)),
      tap(i => console.log(i))
    );
  }

}
