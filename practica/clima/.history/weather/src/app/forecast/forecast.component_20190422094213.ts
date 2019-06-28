import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/services/forecast.service';
import { Weather } from 'src/assets/structures/weather.structures';
import { Observable } from 'rxjs';
import { showUpStaggered } from '../animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {
  listForecast$: Observable<Weather[]>
  constructor(private _forecastService : ForecastService) { }

  ngOnInit() {
    this.listForecast$ = this._forecastService.weather$
  }

}
