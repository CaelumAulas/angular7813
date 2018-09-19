import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import {filter, flatMap} from 'rxjs/operators'

import { APIFotosService } from '../../../services/apifotos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  foto = {}

  constructor(private apiFotos: APIFotosService, rotaAtual: ActivatedRoute) {
    rotaAtual.params
      .pipe(filter(params => params.idFoto))
      .pipe(flatMap(params => apiFotos.get(params.idFoto)))
      .subscribe(foto => this.foto = foto)
  }

  enviarFoto() {
    this.apiFotos.enviar(this.foto)
      .subscribe(() => {
        alert('Deu certo!')
      })
  }

  ngOnInit() {
  }

}
