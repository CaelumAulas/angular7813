import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caelumpic Front-End';

  fotos = []

  constructor(http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos')
      .subscribe((resp: Array<any>) => {
        this.fotos = resp
      })
  }
}
