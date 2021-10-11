import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductionsComponent } from './all-productions/all-productions.component';
import { DetailProductionComponent } from './detail-production/detail-production.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path: 'all', component: AllProductionsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: DetailProductionComponent},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'tv-shows/:id', component: DetailProductionComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: '**', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
