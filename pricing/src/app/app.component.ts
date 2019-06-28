import { Component, OnInit  } from '@angular/core';
import { CurrencyConversionsService } from './services/currency-conversions.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pricing';
  viewConversion$: Observable<any>;
  currency: string = 'EUR'
  rates: Array<any>
  planes : any = {
    special: {
      price : 19.99
    },
    team: {
      price: 49.99
    },
    company: {
      price: 89.99
    }
  }
 
  
  constructor(
    private _CurrencyConversionsService : CurrencyConversionsService) {
  }
  ngOnInit(){
    this._CurrencyConversionsService.get().subscribe(response => this.rates = response.rates)
  }




}
