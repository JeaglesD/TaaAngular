import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { Place } from '../place';
import { SpringApiService } from '../spring-api.service';

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
  places : number[];

  constructor(private springService : SpringApiService) {
    this.searchCity = "";
    this.selectedCity = -1;
    this.cities = [];

    this.searchPlace = "";
    this.selectedPlace = -1;
    this.places = [];
  }

  ngOnInit() {
        this.getCities();
  }

  getCities(){
    this.springService.getCities().subscribe(data=>{
      this.cities = data;
    })
  }

  getPlaces(){
    for(let idPlace of this.cities[this.selectedCity].places){
        this.springService.getPlace(idPlace).subscribe(data => this.places.push(data))
    }
  }

}
