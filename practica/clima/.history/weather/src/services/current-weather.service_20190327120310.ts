import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, observable, Observable } from  'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any> = this.weatherSubject.asObservable(); 

  constructor(private _http: HttpClient) { }

 get(){
   let observable = this._http.get('assets/weather.json').subscribe(this.weatherSubject)
  

 }
   
}
 