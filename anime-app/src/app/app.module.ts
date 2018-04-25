import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetallemangaComponent } from './detallemanga/detallemanga.component';


@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    DetalleComponent,
    DetallemangaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
