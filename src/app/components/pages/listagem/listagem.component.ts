import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIFotosService } from '../../../services/apifotos.service';
import { Observable } from 'rxjs';

import { filter } from 'rxjs/operators';

declare const URL_API_FOTOS

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  fotos: Observable<any>

  termoBusca = ''

  constructor(private apiFotos: APIFotosService) {
    this.fotos = apiFotos.lista()
  }

  apagaFoto(fotoRemovida) {
    this.apiFotos.remove(fotoRemovida)
      .subscribe(() => {
          this.fotos = this.fotos.pipe(filter(
              foto => foto._id !== fotoRemovida._id
          ))
        })
  }

}
