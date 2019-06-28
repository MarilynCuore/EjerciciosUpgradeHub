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
export class ForecastServiceService {
  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any>
  endpoint : string = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private _http : HttpClient) { }

  get(coords : Coords){
    let args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric `;
    let url = this.endpoint + args;
    //if(isDevMode()){
     // url= 'assets/weather.json'
    //}
    this._http.get(url).subscribe(this.weatherSubject)
  }
}
