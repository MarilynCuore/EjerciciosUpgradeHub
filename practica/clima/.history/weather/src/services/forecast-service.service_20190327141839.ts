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

  constructor() { }
}
