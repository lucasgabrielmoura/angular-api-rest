
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preco'
})
export class PrecoPipe implements PipeTransform{
    transform(numero: number) {
        return numero.toFixed(2)
    }
}