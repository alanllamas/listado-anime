import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
