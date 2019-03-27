import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlId'
})
export class ControlIdPipe implements PipeTransform {

  transform(labelName: string, type: string): string {
    const el: string = type.toLowerCase();
    const name: string = labelName.trim()
      .split(/\s+/g)
      .map(word => {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
      }).join('');
    
    return `${el}${name}`;
  }

}
