import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from '../bootstrap/bootstrap.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FotoComponent } from './components/foto/foto.component';
import { CardFotoComponent } from './components/card-foto/card-foto.component';
import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { FormComponent } from './components/pages/form/form.component';

import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { FiltroBuscaPipe } from './pipes/filtro-busca.pipe';

import { routerModuleConfigurado } from './router';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    TresPontinhosPipe,
    CardFotoComponent,
    FiltroBuscaPipe,
    ListagemComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routerModuleConfigurado,
    BrowserModule,
    HttpClientModule,
    BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
