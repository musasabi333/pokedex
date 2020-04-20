import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statName'
})
export class StatNamePipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split('-');
    return words.reduce((name, word) => `${name} ${word}`, '');
  }

}
