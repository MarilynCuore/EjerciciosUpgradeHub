import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/services/current-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.sass']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private _weatherService : CurrentWeatherService) {
    
   }

  ngOnInit() {
    this._weatherService.weather$.subscribe(console.log );
  }

}
