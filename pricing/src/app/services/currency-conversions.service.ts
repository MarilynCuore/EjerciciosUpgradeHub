import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionsService {
  api: string = 'https://api.exchangeratesapi.io/latest'

  constructor(private _http : HttpClient) { 
    this.get()
  }
  get(): Observable<any>{
    const url = this.api
    return this._http.get(url)
  }

}
