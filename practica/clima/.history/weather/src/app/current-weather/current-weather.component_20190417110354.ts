import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/services/current-weather.service';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { showUp } from '../animations/showUp.animation';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  animations: [showUp]
})
export class CurrentWeatherComponent implements OnInit {

  viewWeather$: Observable<any>
  constructor(private weatherService : CurrentWeatherService) {
    
   }

  ngOnInit() {
    this.viewWeather$ = this.weatherService.weather$.pipe(
      map(data => {
        data.temp = data.temp + 'º'
        return data
      })
    )
  }

}
