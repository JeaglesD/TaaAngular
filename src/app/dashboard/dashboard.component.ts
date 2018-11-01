import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { SpringApiService } from '../services/spring-api.service';
import { User } from '../models/user';
import { Place } from '../models/place';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  places: Place[];

  constructor(
    private authenService : AuthentificationService,
    private springService: SpringApiService,
  ) {
    this.places = [];
    const pseudo = this.authenService.getPseudo();
    this.springService.getUserByPseudo(pseudo).subscribe(data =>{
      this.user = data;
      authenService.changeUser(this.user)
    })
  }

  ngOnInit() {
    this.authenService.castUser.subscribe(user=>{
      this.user = user
      this.loadPlaces();
    });
  }

  public loadPlaces(){
    this.places = [];
    for (const idPlace of this.user.idPlaces) {
      this.springService.getPlace(idPlace).subscribe(place =>{
        this.places.push(place);
      }, error =>{
        console.log('getPlace error: ', error);
      })
    }
  }


}
