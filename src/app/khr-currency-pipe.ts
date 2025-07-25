import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kHRCurrency'
})
export class KHRCurrencyPipe implements PipeTransform {

transform(value: any): string {
  const result = value * 4100;
  return result.toLocaleString();
}


}
