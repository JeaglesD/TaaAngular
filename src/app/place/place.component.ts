import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place';
import { User } from '../models/user';
import { SpringApiService } from '../services/spring-api.service';
import { AuthentificationService } from '../services/authentification.service';
import { Activity } from '../models/activity';

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
  user: User;

  constructor(
    private authenService: AuthentificationService,
    private springService: SpringApiService,
  ){
  }

  ngOnInit() {
    this.authenService.castUser.subscribe(user=>this.user = user);
    this.loadActivities()
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

}
