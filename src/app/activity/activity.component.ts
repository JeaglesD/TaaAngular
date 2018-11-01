import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../models/activity';
import { City } from '../models/city';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { SpringApiService } from '../services/spring-api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;
  @Input() idCity: number;
  available: boolean;
  city: City;
  temp: number;
  constructor(
    private springService: SpringApiService,
    private weatherService: OpenWeatherMapService,
  ) {
  }

  ngOnInit() {
      this.loadCity();
  }
  public loadCity(): void{
    this.springService.getCity(this.idCity).subscribe(city =>{
      this.city = city;
      this.loadAvailabe();
    }, error =>{
      console.log('loadCity error :', error);
    })
  }

  public loadAvailabe():void {
    this.weatherService.getWeather(this.city.name, 'fr').subscribe(data => {
      this.temp = this.getTemp(data);
      this.available = this.activity.minTemp < this.temp &&
        this.activity.maxTemp > this.temp;
    }, error => {
      console.log('getWeather error:', error);
    });
  }


    public getTemp(data: any):number{
      let currentDate = new Date()
      let currentDay = currentDate.getDay();
      let nextSaturday = 6 - currentDay;
      let timeSaturday = currentDate.getTime() + nextSaturday * 24 * 60 * 60 * 1000
      if(new Date(timeSaturday).getDay() != 6){
        console.log('getTemp error: not saturday')
        return NaN;
      }else{
        timeSaturday = timeSaturday / 1000
        let weather = data.list.filter(weather =>weather.dt > timeSaturday)[0];
        return weather.main.temp;
      }
    }

}
