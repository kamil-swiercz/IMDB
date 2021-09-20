import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() title!: string;
  @Input() posterPath!: string;
  @Input() description!: string;
  @Input() releaseDate!: string;
  @Input() voteAverage!: number;
  posterPictureUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor() { }

  ngOnInit(): void {
  }

}
