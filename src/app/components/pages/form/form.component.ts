import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {filter, flatMap} from 'rxjs/operators'

import { APIFotosService } from '../../../services/apifotos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nomePagina

  foto: any = {
    titulo: ''
  }

  formFoto: FormGroup = new FormGroup({
    titulo: new FormControl(this.foto.titulo, [Validators.required, Validators.minLength(3)]),
    url: new FormControl(this.foto.titulo, [Validators.required]),
    descricao: new FormControl(this.foto.titulo, [])
  })

  constructor(private apiFotos: APIFotosService, rotaAtual: ActivatedRoute) {
    rotaAtual.params
      .subscribe(params => {
        if (params.idFoto) {
          this.nomePagina = 'Edição'
        } else {
          this.nomePagina = 'Cadastro'
        }
      })

    rotaAtual.params
      .pipe(filter(params => params.idFoto))
      .pipe(flatMap(params => apiFotos.get(params.idFoto)))
      .subscribe(foto => {
        this.foto = foto
        this.formFoto.patchValue(foto)
      })

    this.formFoto.valueChanges.subscribe(objMudancas => {
      this.foto = {...this.foto, ...objMudancas}
    })
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
