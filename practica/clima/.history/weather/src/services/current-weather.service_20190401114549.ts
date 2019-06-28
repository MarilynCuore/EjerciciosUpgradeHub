import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, observable, Observable } from  'rxjs';
import { environment } from '../environments/environment';
import { Coords } from 'src/assets/structures/coords.structures';
import {map} from 'rxjs/operators';
import { Weather } from 'src/assets/structures/weather.structures';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  
  public weather$: Subject<any> = new Subject()

  api: string = "https://api.openweathermap.org/data/2.5"
  endpoint : string = '/weather';

  constructor(private _http: HttpClient) { 

    this.get({ 
      lat: 19.427025,
      lon: -99.167665
    });

  } 

 get(coords : Coords){
   let args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric `;
   let url = this.api + this.endpoint + args;
  //  if(isDevMode()){
  //    url= 'assets/weather.json'
  //  }
   this._http.get(url).subscribe((data: any)  => {
    let mainWeather = data.weather[0];
    let weather : Weather = {
      name: data.name,
      cod: data.cod,
      temp: data.main.temp,
      ...mainWeather
    };
    this.weather$.next(weather)
   })
 }


   
}
 