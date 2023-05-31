import {Pipe, PipeTransform} from '@angular/core';
import {priority} from "../../../config/enums/priority.enum";

@Pipe({
  name: 'valueToKeys'
})
export class ObjectValueToKeysPipePipe implements PipeTransform {

  transform(value: number): string {
    const indexOfValue = Object.values(priority).indexOf(value);
    const key = Object.keys(priority)[indexOfValue]
    return key;
  }

}
