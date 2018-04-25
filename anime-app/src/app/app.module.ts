import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { CoreModule } from './core/core.module';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    DetalleAnimeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
