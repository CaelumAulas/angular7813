import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIFotosService } from '../../../services/apifotos.service';

declare const URL_API_FOTOS

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  fotos = []

  termoBusca = ''

  apiFotos: APIFotosService

  constructor(apiFotos: APIFotosService) {
    this.apiFotos = apiFotos
    apiFotos.lista()
      .subscribe((resp: Array<any>) => {
        this.fotos = resp
      })
  }

  apagaFoto(fotoRemovida) {
    this.apiFotos.remove(fotoRemovida)
      .subscribe(() => {
          this.fotos = this.fotos.filter(
            foto => foto._id !== fotoRemovida._id
          )
        })
  }

}
