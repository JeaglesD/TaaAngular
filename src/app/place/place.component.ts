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
      // console.log('this.temp', this.temp)
    }, error => {
      console.log('getWeather error:', error);
    });
  }

  public getTemp(data: any):number{
    const currentDate = new Date()
    const currentDay = currentDate.getDay();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const nextSaturday = currentDate.getDate() + 6 - currentDay
    let dateSaturday = currentYear + '-' + currentMonth + '-' + nextSaturday + ' 12:00:00';
    let weather = data.list.filter(weather => weather.dt_txt == dateSaturday)[0];
    // console.log('weather', weather)
    return weather.main.temp;

  }

}
