import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = 'http://localhost:3000/v1/fotos/'

@Injectable({
  providedIn: 'root'
})
export class APIFotosService {

  http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  lista() {
    return this.http.get(URL_API)
  }

  get(idFoto) {
    return this.http.get(URL_API + idFoto)
  }

  remove(foto) {
    return this.http.delete(URL_API + foto._id)
  }

  enviar(foto: any): any {
    if (foto._id) {
      return this.http.put(URL_API + foto._id, foto)
    } else {
      return this.http.post(URL_API, foto)
    }
  }

}
