import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  listForecast: any;
  constructor(private _forecastService : ForecastService) { }

  ngOnInit() {
    this._forecastService.weather$.subscribe(console.log)
  }

}
