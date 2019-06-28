import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/services/current-weather.service';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  viewWeather$: Observable<any>
  constructor(private weatherService : CurrentWeatherService) {
    
   }

  ngOnInit() {
    this.viewWeather$ = this.weatherService.weather$
  }

}
