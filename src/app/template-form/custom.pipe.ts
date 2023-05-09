import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, gender: any): any {
    if(gender == 'Male'){
      return "Mr."+" "+value
    } else {
      return "Miss."+" "+value
    }
  }

}
