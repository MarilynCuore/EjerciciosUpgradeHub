import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/services/current-weather.service';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(public weatherService : CurrentWeatherService) {
    
   }

  ngOnInit() {
    this.weatherService.weather$.subscribe(console.log );
    

  }

}
