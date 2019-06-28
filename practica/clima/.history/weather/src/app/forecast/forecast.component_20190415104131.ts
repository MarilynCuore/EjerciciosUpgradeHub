import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/services/forecast.service';
import { Weather } from 'src/assets/structures/weather.structures';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  listForecast: Array<Weather>;
  constructor(private _forecastService : ForecastService) { }

  ngOnInit() {
    this._forecastService.weather$.subscribe(data => this.listForecast = data)
  }

}
