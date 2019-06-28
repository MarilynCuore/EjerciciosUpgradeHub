import { Component } from '@angular/core';
import { CurrentWeatherService } from 'src/services/current-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';

  constructor(private _weather : CurrentWeatherService){
  }
  ngOnInit(){
    this._weather.get();

  }
}
