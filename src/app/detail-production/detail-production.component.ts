import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailProductionService } from './detail-production.service';

@Component({
  selector: 'app-detail-production',
  templateUrl: './detail-production.component.html',
  styleUrls: ['./detail-production.component.css']
})
export class DetailProductionComponent implements OnInit {
  public detailProduction$!: Observable<any>;
  posterPictureUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private route: ActivatedRoute, private detailProductionService: DetailProductionService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const [{path: category}] = this.route.snapshot.url;
    this.detailProduction$ = this.detailProductionService.getDetailProduction(id, category);
  }

}
