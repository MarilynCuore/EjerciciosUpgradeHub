import { Component } from '@angular/core';
import { ForecastService } from 'src/services/forecast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';

  constructor(private forecastService : ForecastService){
  }
  ngOnInit(){
    this.forecastService.weather$.subscribe(console.log);
  }
}
