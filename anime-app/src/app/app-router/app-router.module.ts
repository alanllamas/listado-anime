import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { AnimeComponent } from '../anime/anime.component';
import { DetalleAnimeComponent } from '../detalle-anime/detalle-anime.component';
import { AppComponent } from '../app.component';
const routes : Routes = [

  { path: '', component: AppComponent},
  { path: 'anime', component: AnimeComponent},
  { path: 'anime/:id', component: DetalleAnimeComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouterModule { }
