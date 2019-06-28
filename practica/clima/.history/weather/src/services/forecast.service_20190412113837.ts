import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, observable, Observable } from  'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../environments/environment';
import { Coords } from 'src/assets/structures/coords.structures';
import {map} from 'rxjs/operators';
import { Weather } from 'src/assets/structures/weather.structures';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any>
  endpoint : string = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private _http : HttpClient) {
    this.weather$ = this.weatherSubject.asObservable();
    this.get({ 
      lat: 19.427025,
      lon: -99.167665
    });

   }
  structureData(data: any){
    data.list.forEach(weatherObject => {
      let date = new Date(weatherObject.dt * 1000)
      let hours = date.getHours();
      let month = date.getMonth();
      let date = date.getDay();
      
    });

  }

  get(coords : Coords){
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric `;
    let url = this.endpoint + args;

    if(isDevMode()){
     url= 'assets/forecast.json'
    }

    this._http.get(url).subscribe(this.weatherSubject)
  }
}
