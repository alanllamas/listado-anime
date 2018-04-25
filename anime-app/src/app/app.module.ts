import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { CoreModule } from './core/core.module';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';
import { AppRouterModule } from './app-router/app-router.module';


@NgModule({
  declarations: [
    AppComponent,
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
