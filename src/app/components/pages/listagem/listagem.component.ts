import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  fotos = []

  termoBusca = ''

  httpClient: HttpClient

  constructor(http: HttpClient) {
    this.httpClient = http

    http.get('http://localhost:3000/v1/fotos')
      .subscribe((resp: Array<any>) => {
        this.fotos = resp
      })
  }

  apagaFoto(fotoRemovida) {
    this.httpClient.delete('http://localhost:3000/v1/fotos/' + fotoRemovida._id)
      .subscribe(() => {
        this.fotos = this.fotos.filter(
          foto => foto._id !== fotoRemovida._id
        )
      })
  }

}
