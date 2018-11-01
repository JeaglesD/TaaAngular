import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place';
import { User } from '../models/user';
import { SpringApiService } from '../services/spring-api.service';
import { AuthentificationService } from '../services/authentification.service';
import { Activity } from '../models/activity';
import { City } from '../models/city';
import { OpenWeatherMapService } from '../services/open-weather-map.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() add: boolean;
  @Input() place: Place;
  @Input() remove: boolean;
  activities: Activity[];
  city: City;
  temp: number;
  user: User;

  constructor(
    private authenService: AuthentificationService,
    private springService: SpringApiService,
    private weatherService: OpenWeatherMapService,

  ){
  }

  ngOnInit() {
    this.authenService.castUser.subscribe(user=>this.user = user);
    this.loadCity();
    this.loadActivities();
  }

  public addPlaceToUser():void{
    this.springService.addPlaceToUser(this.place.idPlace, this.user.idUser).subscribe(data=>{
      this.authenService.changeUser(data);
    }, error=>{
      console.log('addPlaceToUser error: ', error);
    })
  }

  public removePlaceToUser():void{
    this.springService.removePlaceToUser(this.place.idPlace, this.user.idUser).subscribe(data=>{
      console.log('removeUser', data)
      this.authenService.changeUser(data);
    }, error=>{
      console.log('removePlaceToUser error: ', error);
    })
  }

  public loadActivities():void{
    this.activities = []
    for(const idActivity of this.place.idActivities){
      this.springService.getActivity(idActivity).subscribe(activity =>{
        this.activities.push(activity);
      }), error =>{
        console.log('loadActivities error: ', error);
      }
    }
  }

  public loadCity(): void{
    this.springService.getCity(this.place.idCity).subscribe(city =>{
      this.city = city;
      this.loadAvailabe();
    }, error =>{
      console.log('loadCity error :', error);
    })
  }

  public loadAvailabe():void {
    this.weatherService.getWeather(this.city.name, 'fr').subscribe(data => {
      this.temp = this.getTemp(data);
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
