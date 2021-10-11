import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() posterPath: string | undefined;
  @Input() description: string | undefined;
  @Input() releaseDate: string | undefined;
  @Input() voteAverage: number | undefined;
  @Input() category!: string;
  posterPictureUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor() { }

  ngOnInit(): void {

  }

}
