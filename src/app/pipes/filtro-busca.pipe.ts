import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusca'
})
export class FiltroBuscaPipe implements PipeTransform {

  transform(lista: Array<any>, termoBusca: string): Array<any> {

    return lista.filter(
      item => item.titulo.toLowerCase().includes(termoBusca.toLowerCase())
    )

  }

}
