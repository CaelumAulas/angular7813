import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIFotosService {

  http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  lista() {
    return this.http.get('http://localhost:3000/v1/fotos')
  }

  get(idFoto) {
    return this.http.get('http://localhost:3000/v1/fotos/' + idFoto)
  }

  remove(foto) {
    return this.http.delete('http://localhost:3000/v1/fotos/' + foto._id)
  }


}
