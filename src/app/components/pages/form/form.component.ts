import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import {filter, flatMap} from 'rxjs/operators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  foto = {}

  constructor(httpClient: HttpClient, rotaAtual: ActivatedRoute) {
    rotaAtual.params
      .pipe(filter(params => params.idFoto))
      .pipe(flatMap(params => httpClient.get('http://localhost:3000/v1/fotos/' + params.idFoto)))
      .subscribe(foto => this.foto = foto)

      // rotaAtual.params
      // .subscribe((params) => {
      //   if (params.idFoto) {
      //     httpClient.get('http://localhost:3000/v1/fotos/' + params.idFoto)
      //       .subscribe((foto) => {
      //         this.foto = foto
      //       })
      //   }
      // })

  }

  ngOnInit() {
  }

}
