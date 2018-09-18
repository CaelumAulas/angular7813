import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from '../bootstrap/bootstrap.module'

import { AppComponent } from './app.component';
import { FotoComponent } from './components/foto/foto.component';
import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { CardFotoComponent } from './components/card-foto/card-foto.component';
import { FiltroBuscaPipe } from './pipes/filtro-busca.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    TresPontinhosPipe,
    CardFotoComponent,
    FiltroBuscaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
