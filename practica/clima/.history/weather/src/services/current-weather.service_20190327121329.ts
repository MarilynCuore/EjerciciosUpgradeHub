import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, observable, Observable } from  'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any> = this.weatherSubject.asObservable();
  endpoint : string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private _http: HttpClient) { 
    this.get();
  }

 get(){
   let observable = this._http.get('assets/weather.json').subscribe(this.weatherSubject)
 }


   
}
 