import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-foto',
  templateUrl: './card-foto.component.html',
  styleUrls: ['./card-foto.component.css']
})
export class CardFotoComponent  {
  @Input() foto
}
