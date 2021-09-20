import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductionsComponent } from './all-productions/all-productions.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path: 'all', component: AllProductionsComponent},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: '**', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
