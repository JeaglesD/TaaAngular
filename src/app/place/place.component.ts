import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place';
import { User } from '../models/user';
import { SpringApiService } from '../services/spring-api.service';
// import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() add: boolean;
  @Input() place: Place;
  @Input() remove: boolean;
  user: User;

  constructor(
    private authenService: AuthentificationService,
    // private weatherService: OpenWeatherMapService,
    private springService: SpringApiService,
  ){
  }

  ngOnInit() {
    this.authenService.castUser.subscribe(user=>this.user = user);
  }

  public addPlaceToUser():void{
    this.springService.addPlaceToUser(this.place.idPlace, this.user.idUser).subscribe(data=>{
      console.log('addUser', data)
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
      console.log('addPlaceToUser error: ', error);
    })
  }

}
