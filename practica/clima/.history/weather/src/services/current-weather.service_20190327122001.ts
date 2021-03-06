import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, observable, Observable } from  'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../environments/environment';
import { Coords } from 'src/assets/structures/coords.structures';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any> = this.weatherSubject.asObservable();
  endpoint : string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private _http: HttpClient) { 
    this.get({
      lat: 35,
      lon: 139
    });
  }

 get(coords : Coords){
   let args: string = `?lat={lat}&lon={lon}`;
   let observable = this._http.get(this.endpoint+args).subscribe(this.weatherSubject)
 }


   
}
 