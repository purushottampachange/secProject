import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string , limit : number = 80) {
    
    return value.substring(0,limit) + "...."
  
  }

}
