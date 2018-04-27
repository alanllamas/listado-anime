import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { MangaComponent } from './manga/manga.component';
import { DetallemangaComponent } from './detallemanga/detallemanga.component';

import { AnimeComponent } from './anime/anime.component';
import { CoreModule } from './core/core.module';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';
import { AppRouterModule } from './app-router/app-router.module';


@NgModule({
  declarations: [
    AppComponent,

    MangaComponent,
    DetallemangaComponent,

    AnimeComponent,
    DetalleAnimeComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
