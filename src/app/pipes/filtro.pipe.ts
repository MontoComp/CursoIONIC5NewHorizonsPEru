import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(data: any[], texto: any): any[] {
    /* if(texto.length===0){
      return data;
    } */
    texto= texto.toLowerCase();
    return data.filter((item)=>{
      return item.name.toLowerCase().includes(texto);
    });
  }

}
