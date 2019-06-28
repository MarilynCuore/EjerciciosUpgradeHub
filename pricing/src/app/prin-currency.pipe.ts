import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prinCurrency'
})
export class PrinCurrencyPipe implements PipeTransform {

  transform(value: number, currency, rates): any {

    if(currency == 'EUR') {
      
      return value.toString().replace('.', ',') + ' €'
    }else if(currency == 'GBP') {
      let price: any = value * rates[currency]
          price = price.toFixed(2)
          price = price.toString().replace('.', ',')
      return  '£' + price
    }else{
      let price: any = value * rates[currency]
      price = price.toFixed(2)
      price = price.toString().replace('.', ',')
      return '$' + price
    }
  }

}
