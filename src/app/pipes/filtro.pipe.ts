import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(objetos: any[], texto: string, coluna: string): any[] {

    if (texto === '') {
        return objetos;
    }
    texto = texto.toLowerCase();
    return objetos.filter(item => {
        return item[coluna].toLowerCase().includes(texto);
    });
  }

}
