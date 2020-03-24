import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertGender'
})
export class ConvertGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 1 ? "Nam" : "Nữ";
  }
}