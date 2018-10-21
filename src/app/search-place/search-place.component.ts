import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { Place } from '../models/place';
import { SpringApiService } from '../services/spring-api.service';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css'],
  providers: [SpringApiService],
})
export class SearchPlaceComponent implements OnInit {
  searchCity : string;
  selectedCity : number;
  cities : City[];
  searchPlace : string;
  selectedPlace : number;
  places : Place[];

  constructor(private springService : SpringApiService) {
    this.searchCity = "";
    this.selectedCity = -1;
    this.cities = [];

    this.searchPlace = "";
    this.selectedPlace = -1;
    this.places = [];
  }

  ngOnInit() {
  }

  getCities(){
    this.springService.getCities(this.searchCity).subscribe(data=> {
      this.cities = data;
    }, error => {
      console.log('getCities error:', error);
    })
  }

  getPlaces(){
    console.log('selectedCity',this.cities[this.selectedCity])
    for(let idPlace of this.cities[this.selectedCity].idPlaces){
      console.log('places', this.places);
       this.springService.getPlace(idPlace).subscribe(data=>{
         this.places.push(data);
       }, error => {
         console.log('getPlaces error:', error);
       })
    }
  }

}
